const { useState, useRef, useEffect } = require('react');

export const useNearScreen = ({ distance = '100px' } = {}) => {
  const [show, setShow] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    let observer;

    const onChange = (entries, observer) => {
      const el = entries[0];
      // console.log(el.isIntersecting);
      if (el.isIntersecting) {
        setShow(true);

        // Esto servirá para que no se renderize el useState del estado a cada rato
        observer.disconnect();
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

      observer.observe(element.current);
    });

    // Si tenemos observer pues lo desconectamos tmbn aquí
    return () => observer && observer.disconnect();
  }, [distance]);

  return { show, element };
};
