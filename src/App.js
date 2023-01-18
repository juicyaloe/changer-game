import { Fragment } from 'react';
import { Route, Routes } from 'react-router';

import CssBaseline from '@mui/material/CssBaseline';

import Main from './pages/main';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Fragment>
  );
}

export default App;
