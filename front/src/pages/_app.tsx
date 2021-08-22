import React, { ReactElement } from 'react';
import Head from 'next/head';

const App = ({ Component }): ReactElement => {
  return (
    <>
      <Head>
        <title>백석대학교 청원</title>
        <meta charSet="UTF-8" />
      </Head>
      <Component />
    </>
  );
};

export default App;
