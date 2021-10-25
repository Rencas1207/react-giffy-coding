import React from 'react';
import Gif from '../../components/Gif/Gif';
import { Spinner } from '../../components/Spinner/Spinner';

import { useSingleGif } from '../../hooks/useSingleGif';

import { Redirect } from 'wouter';
// import { useSEO } from '../../hooks/useSEO';

import { Helmet } from 'react-helmet';

export const Detail = ({ params }) => {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  const title = gif ? gif.title : '';
  // useSEO({ title, description: `Detail of ${title}` });

  // Enseñamos tmbn el spinner para antes del renderizado
  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner />
      </>
    );
  }

  // Ahora tmbn si hay un error
  if (isError) return <Redirect to="/404" />;

  // Si no tenemos gif no retornes nada
  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title>{title} || Giphy</title>
      </Helmet>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
  );
};
