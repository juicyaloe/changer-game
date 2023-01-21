import Slider from "react-slick";

import styled from "@emotion/styled";

import TopSliderContent from "./topSliderContent";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopSliderContainer = styled.div`
  padding-top: 10px;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 100%;
    height: auto;

    margin: 0 auto;
  }

  .slick-slide div {
    /* cursor: pointer; */
  }

  .slick-dots {
    bottom: -15px;

    @media screen and (min-width: 769px) {
      bottom: -30px;
    }
  }

  .slick-track {
    /* overflow-x: hidden; */
  }
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
    centerPadding: "0px",
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <TopSliderContainer>
      <StyledSlider {...settings}>
        <TopSliderContent
          text={`국가대표가\n착용하는\nGame Changer`}
          src="https://placeimg.com/200/150"
        />
        <TopSliderContent
          text={`남녀노소\n착용하는\nGame Changer`}
          src="https://placeimg.com/200/150"
        />
      </StyledSlider>
    </TopSliderContainer>
  );
}
