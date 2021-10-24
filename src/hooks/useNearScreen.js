import { useState, useRef, useEffect } from 'react';

export const useNearScreen = ({
  distance = '100px',
  externalRef,
  once = true,
} = {}) => {
  const [show, setShow] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    let observer;

    const elementRef = externalRef ? externalRef.current : element.current;

    const onChange = (entries, observer) => {
      const el = entries[0];
      // console.log(el.isIntersecting);
      if (el.isIntersecting) {
        setShow(true);

        // Esto servirá para que no se renderize el useState del estado a cada rato
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    // Hacemos un promesa resolve para importar la librería de forma dinámica solo se descargará cuando lo necesita.
    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });

      elementRef && observer.observe(elementRef);
    });

    // Si tenemos observer pues lo desconectamos tmbn aquí
    return () => observer && observer.disconnect();
  }, [distance, externalRef, once]);

  return { show, element };
};
