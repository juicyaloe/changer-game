import BasicStructure from '../components/structure/basicStructure';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { useState } from 'react';

import { login } from '../module/api';
import { useNavigate } from 'react-router-dom';

const LoginWrap = styled.div`
  padding-top: 150px;
  margin: 0 auto;

  width: 95%;
  max-width: 350px;
  @media screen and (min-width: 769px) {
    width: 50%;
    max-width: 350px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 10px;
`;

const LoginText = styled.span`
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
`;

const CustomTextField = styled(TextField)`
  width: 100%;
`;

const BottomButtonWrap = styled.div`
  width: 100%;

  padding-top: 35px;

  display: flex;
  flex-direction: wrap;
  justify-content: center;
  align-items: center;

  gap: 10%;
`;

const CustomButton = styled(Button)`
  width: 40%;
`;

export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [errorPostion, setErrorPostion] = useState<string>('none');
  const [errorMsg, setErrorMsg] = useState<string>('');

  // TODO: 메시지 제거
  const [successMsg, setSuccessMsg] = useState<string>('로그인 되어 있지 않음');

  const validation = () => {
    if (id.length < 3) {
      setErrorPostion('id');
      setErrorMsg('3자 이상의 아이디를 입력해 주세요.');

      return false;
    } else if (password.length < 8) {
      setErrorPostion('password');
      setErrorMsg('8자 이상의 비밀번호를 입력해 주세요.');

      return false;
    }

    return true;
  };

  const loginButtonClicked = () => {
    const isSuccess = validation();

    if (isSuccess) {
      login(id, password)
        .then((json) => {
          setSuccessMsg(json.user.userid + ' 아이디로 로그인 성공');
        })
        .catch((err) => {
          setSuccessMsg('로그인 실패');
        });
    }
  };

  return (
    <BasicStructure>
      <LoginWrap>
        <LoginText>로그인</LoginText>
        <CustomTextField
          error={errorPostion === 'id'}
          label="아이디"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
            setErrorPostion('none');
          }}
          helperText={errorPostion === 'id' ? errorMsg : ''}
          variant="standard"
        />
        <CustomTextField
          error={errorPostion === 'password'}
          label="비밀번호"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorPostion('none');
          }}
          helperText={errorPostion === 'password' ? errorMsg : ''}
          variant="standard"
        />
        <BottomButtonWrap>
          <CustomButton variant="outlined" onClick={() => navigate('/signup')}>
            회원가입
          </CustomButton>
          <CustomButton variant="outlined" onClick={loginButtonClicked}>
            로그인
          </CustomButton>
        </BottomButtonWrap>
        {successMsg}
      </LoginWrap>
    </BasicStructure>
  );
}
