import BasicStructure from '../../components/structure/basicStructure';

import Button from '@mui/material/Button';

import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { clear } from '../../store/authSlice';

const MyPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 20px;
`;

export default function MyPage() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => state.auth);

  return (
    <BasicStructure>
      <MyPageWrap>
        <span> MyPage 페이지입니다.</span>
        <span> 내 이름: {userInfo.name}</span>
        <span> 내 전화번호: {userInfo.phone}</span>
        <Button variant="outlined" onClick={() => dispatch(clear())}>
          로그 아웃
        </Button>
      </MyPageWrap>
    </BasicStructure>
  );
}
