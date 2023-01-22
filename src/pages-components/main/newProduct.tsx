import styled from "@emotion/styled";
import NewProductContent from "./newProductContent";

const NewProductWrap = styled.div`
  padding-top: 25px;

  @media screen and (min-width: 769px) {
    padding-top: 40px;
  }
`;

const NewProductText = styled.div`
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

export default function NewProduct() {
  return (
    <NewProductWrap>
      <NewProductText>New Product</NewProductText>
      <ProductContainer>
        <NewProductContent text='반갑' src='https://placeimg.com/150/150' />
        <NewProductContent text='신상' src='https://placeimg.com/150/150' />
        <NewProductContent text='신상' src='https://placeimg.com/150/150' />
        <NewProductContent text='신상' src='https://placeimg.com/150/150' />
        <NewProductContent text='신상' src='https://placeimg.com/150/150' />
        <NewProductContent text='신상' src='https://placeimg.com/150/150' />
        <NewProductContent text='신상' src='https://placeimg.com/150/150' />
        <NewProductContent text='신상' src='https://placeimg.com/150/150' />
      </ProductContainer>
    </NewProductWrap>
  );
}
