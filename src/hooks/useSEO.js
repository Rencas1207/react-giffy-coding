import { useEffect, useRef } from 'react';

export const useSEO = ({ title, description }) => {
  const prevTitle = useRef(document.title);
  const prevDescription = useRef(
    document.querySelector('meta[name="description"]').getAttribute('content')
  );

  useEffect(() => {
    const previousTitle = prevTitle.current;

    if (title) {
      document.title = `${title} | Giphy`;
    }

    // Con esto recuperamos el titulo anterior
    return () => (document.title = previousTitle);
  }, [title]);

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = prevDescription.current;

    if (description) {
      metaDescription.setAttribute('content', description);
    }

    return () => metaDescription.setAttribute('content', previousDescription);
  }, [description]);
};
