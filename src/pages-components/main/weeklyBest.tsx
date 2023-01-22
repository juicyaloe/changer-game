import Slider from "react-slick";

import styled from "@emotion/styled";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WeeklyBestContent from "./weeklyBestContent";
import { useMediaQuery } from "react-responsive";

const WeeklyBestWrap = styled.div`
  padding-top: 35px;

  @media screen and (min-width: 769px) {
    padding-top: 55px;
  }
`;

const WeeklyBestText = styled.div`
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 100%;

    margin: 0 auto;
  }

  .slick-slide div {
    /* cursor: pointer; */
  }

  .slick-dots {
  }

  .slick-track {
    /* overflow-x: hidden; */
  }
`;

export default function WeeklyBest() {
  const isSmall = useMediaQuery({
    // 2개
    query: "(max-width:450px)",
  });

  const isMiddle = useMediaQuery({
    // 3개
    query: "(max-width:600px)",
  });

  const isBig = useMediaQuery({
    // 4개
    query: "(max-width:900px)",
  });

  const currentShowLevel = isSmall ? 2 : isMiddle ? 3 : isBig ? 4 : 5;

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: currentShowLevel,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <WeeklyBestWrap>
      <WeeklyBestText>Weekly Best</WeeklyBestText>
      <StyledSlider {...settings}>
        <WeeklyBestContent src='https://placeimg.com/150/150' />
        <WeeklyBestContent src='https://placeimg.com/150/150' />
        <WeeklyBestContent src='https://placeimg.com/150/150' />
        <WeeklyBestContent src='https://placeimg.com/150/150' />
        <WeeklyBestContent src='https://placeimg.com/150/150' />
        <WeeklyBestContent src='https://placeimg.com/150/150' />
      </StyledSlider>
    </WeeklyBestWrap>
  );
}
