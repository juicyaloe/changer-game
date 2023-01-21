import styled from "@emotion/styled";

const SliderContent = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const SliderText = styled.span`
  flex-basis: 30%;
  padding: 0 20px;

  word-break: break-all;
  white-space: pre;

  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const SliderImg = styled.img`
  flex-basis: 70%;

  border-radius: 20px;

  cursor: pointer;
`;

interface TopSliderContentType {
  text: string;
  src: string;
  alt?: string;
}

export default function TopSliderContent({
  text,
  src,
  alt = "",
}: TopSliderContentType) {
  return (
    <SliderContent>
      <SliderText>{text}</SliderText>
      <SliderImg src={src} alt={alt} />
    </SliderContent>
  );
}
