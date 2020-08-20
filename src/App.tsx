import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GLobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GLobalStyle />
  </>
);

export default App;
