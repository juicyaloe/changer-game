import Slider from 'react-slick';

import styled from '@emotion/styled';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TopSliderContainer = styled.div`
  padding-top: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 30px;
`;

const StyledTitle = styled.span`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 600px;
    height: 300px;
  }

  .slick-slide div {
    /* cursor: pointer; */
  }

  .slick-dots {
    bottom: -30px;
  }

  .slick-track {
    /* overflow-x: hidden; */
  }
`;

const SliderContent = styled.img`
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
`;

export default function TopSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <TopSliderContainer>
      <StyledTitle>
        <span>국가대표가 착용하는</span>
        <br />
        <span>Game Changer</span>
      </StyledTitle>
      <StyledSlider {...settings}>
        <SliderContent src="https://placeimg.com/200/100" alt="" />
        <SliderContent src="https://placeimg.com/200/100" alt="" />
        <SliderContent src="https://placeimg.com/200/100" alt="" />
        <SliderContent src="https://placeimg.com/200/100" alt="" />
        <SliderContent src="https://placeimg.com/200/100" alt="" />
      </StyledSlider>
    </TopSliderContainer>
  );
}
