import Container from '../components/layout/container';
import Header from '../components/layout/header';
import MenuBar from '../components/layout/menuBar';
import TopSlider from '../pages-components/main/topSlider';
import WeeklyBest from '../pages-components/main/weeklyBest';

export default function Main() {
  return (
    <Container>
      <Header />
      <MenuBar />
      <TopSlider />
      <WeeklyBest />
    </Container>
  );
}
