import styled from "@emotion/styled";

const NewProductContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin: 10px;
`;

const StyledImg = styled.img`
  width: 125px;
`;

const StyledText = styled.span``;

interface NewProductContentType {
  text: string;
  src: string;
  alt?: string;
}

export default function NewProductContent({
  text,
  src,
  alt = "",
}: NewProductContentType) {
  return (
    <NewProductContentWrap>
      <StyledImg src={src} alt={alt} />
      <StyledText>{text}</StyledText>
    </NewProductContentWrap>
  );
}
