import { Fragment } from 'react';
import { Route, Routes } from 'react-router';

import CssBaseline from '@mui/material/CssBaseline';

import Main from './pages/main';
import Search from './pages/search';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Fragment>
  );
}

export default App;
