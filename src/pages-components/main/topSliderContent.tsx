import styled from "@emotion/styled";
import Mobile from "../../components/responsive/mobile";
import PC from "../../components/responsive/pc";

const PCSliderContent = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PCSliderText = styled.span`
  flex-basis: 30%;
  padding-right: 20px;

  white-space: pre;

  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const PCSliderImg = styled.img`
  flex-basis: 70%;

  width: 100%;
  max-width: 275px;

  border-radius: 20px;

  cursor: pointer;
`;

const MobileSliderContent = styled.div`
  width: 95%;
  height: auto;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MobileSliderText = styled.span`
  white-space: nowrap;

  text-align: center;
  font-size: 1.125rem;
  font-weight: bold;
`;

const MobileSliderImg = styled.img`
  width: 70%;

  margin: 15px;

  border-radius: 15px;

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
    <>
      <PC>
        <PCSliderContent>
          <PCSliderText>{text}</PCSliderText>
          <PCSliderImg src={src} alt={alt} />
        </PCSliderContent>
      </PC>
      <Mobile>
        <MobileSliderContent>
          <MobileSliderText>{text}</MobileSliderText>
          <MobileSliderImg src={src} alt={alt} />
        </MobileSliderContent>
      </Mobile>
    </>
  );
}
