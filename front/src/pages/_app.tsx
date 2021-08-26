import React, { ReactElement } from 'react';
import Head from 'next/head';
import GlobalStyle from '../theme/globalStyle';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ Component }): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>백석대학교 청원</title>
        <meta charSet="UTF-8" />
      </Head>
      <Component />
    </>
  );
};

export default App;
