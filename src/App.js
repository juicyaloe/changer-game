import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router";

import CssBaseline from "@mui/material/CssBaseline";

import Main from "./pages/main";
import Search from "./pages/search";
import TopBar from "./components/common/topBar";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <TopBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Fragment>
  );
}

export default App;
