import styled from '@emotion/styled';

const WeeklyBestWrap = styled.div`
  padding-top: 60px;
`;

const WeeklyBestText = styled.div`
  text-align: center;
  font-size: 1.75rem;
  font-weight: bold;
`;

const ItemCardWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ItemCard = styled.img`
  padding: 20px 70px;
`;

export default function WeeklyBest() {
  return (
    <WeeklyBestWrap>
      <WeeklyBestText>Weekly Best</WeeklyBestText>
      <ItemCardWrap>
        <ItemCard src="https://placeimg.com/150/150" alt="" />
        <ItemCard src="https://placeimg.com/150/150" alt="" />
        <ItemCard src="https://placeimg.com/150/150" alt="" />
      </ItemCardWrap>
    </WeeklyBestWrap>
  );
}
