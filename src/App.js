import { Fragment } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import CssBaseline from '@mui/material/CssBaseline';

import Main from './pages/main';
import Search from './pages/search';
import TopBar from './components/common/topBar';
import CustomUniform from './pages/menu/customUniform';
import GameChanger from './pages/menu/gameChanger';
import Product from './pages/menu/product';
import AboutUs from './pages/gc/aboutUs';
import LookBook from './pages/gc/lookBook';
import Uniform from './pages/custom/uniform';
import WindBreaker from './pages/custom/windBreaker';
import Trainning from './pages/custom/tranning';
import Vest from './pages/custom/vest';
import Pinnie from './pages/custom/pinnie';
import Top from './pages/product/top';
import Pants from './pages/product/pants';
import Outer from './pages/product/outer';
import Under from './pages/product/under';
import Etc from './pages/product/etc';
import Event from './pages/event';
import Magazine from './pages/magazine';
import Review from './pages/review';
import MyPage from './pages/mypage';
import Cart from './pages/cart';
import Login from './pages/login';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <TopBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />

        <Route path="/gc">
          <Route path="" element={<GameChanger />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="lookbook" element={<LookBook />} />
        </Route>

        <Route path="/custom">
          <Route path="" element={<CustomUniform />} />
          <Route path="uniform" element={<Uniform />} />
          <Route path="wb" element={<WindBreaker />} />
          <Route path="tranning" element={<Trainning />} />
          <Route path="vest" element={<Vest />} />
          <Route path="pinnie" element={<Pinnie />} />
        </Route>

        <Route path="/product">
          <Route path="" element={<Product />} />
          <Route path="top" element={<Top />} />
          <Route path="pants" element={<Pants />} />
          <Route path="outer" element={<Outer />} />
          <Route path="under" element={<Under />} />
          <Route path="etc" element={<Etc />} />
        </Route>

        <Route path="/event" element={<Event />} />
        <Route path="/review" element={<Review />} />
        <Route path="/magazine" element={<Magazine />} />

        <Route path="/mypage" element={<MyPage />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
