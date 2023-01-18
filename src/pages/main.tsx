import Header from '../components/layout/header';
import MenuBar from '../components/layout/menuBar';
import BestItems from '../pages-components/main/bestItems';
import MainImage from '../pages-components/main/mainImage';

export default function Main() {
  return (
    <>
      <Header />
      <MenuBar />
      <MainImage src="https://placeimg.com/500/100" alt="이미지" />
      <BestItems />
    </>
  );
}
