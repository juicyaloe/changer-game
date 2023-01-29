import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { close } from '../../store/popupSlice';

import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const PopupWrap = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  padding: 15px;

  z-index: 100;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;

  height: 250px;

  box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.3);
`;

const PopupTitle = styled.div`
  padding-top: 15px;
  padding-bottom: 5px;

  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const PopupContent = styled.div`
  padding: 10px;

  text-align: center;
  white-space: pre-line;
`;

const PopupButtonWrap = styled.div`
  margin-top: auto;
  padding-bottom: 10px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;

  gap: 20px;
`;

export default function Popup() {
  const navigate = useNavigate();

  const isActive = useSelector((state: RootState) => state.popup.isActive);
  const title = useSelector((state: RootState) => state.popup.title);
  const content = useSelector((state: RootState) => state.popup.content);

  const navigateUrl = useSelector(
    (state: RootState) => state.popup.navigateUrl
  );

  const closeFunc = navigateUrl
    ? () => {
        dispatch(close());
        navigate(navigateUrl);
      }
    : () => dispatch(close());

  const dispatch = useDispatch();

  return isActive ? (
    <PopupWrap>
      <MainBox>
        <PopupTitle>{title}</PopupTitle>
        <Divider sx={{ width: '90%' }} />
        <PopupContent>{content}</PopupContent>
        <PopupButtonWrap>
          <Button variant="outlined" onClick={closeFunc}>
            확인
          </Button>
        </PopupButtonWrap>
      </MainBox>
    </PopupWrap>
  ) : (
    <></>
  );
}
