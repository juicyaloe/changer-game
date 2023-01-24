import styled from '@emotion/styled';

const WeeklyBestContentWrap = styled.div`
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 125px;
`;

interface WeeklyBestContentType {
  src: string;
  alt?: string;
}

export default function WeeklyBestContent({
  src,
  alt = '',
}: WeeklyBestContentType) {
  return (
    <WeeklyBestContentWrap>
      <StyledImg src={src} alt={alt} />
    </WeeklyBestContentWrap>
  );
}
