import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { open } from '../../store/popupSlice';
import { setAuth } from '../../store/authSlice';

import BasicStructure from '../../components/structure/basicStructure';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

import { login } from '../../module/api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

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

interface LoginState {
  access: string;
  refresh: string;
  user: {
    address: string;
    created_at: string;
    date_of_birth: string;
    email: string;
    email_check: boolean;
    id: number;
    is_active: boolean;
    is_admin: boolean;
    last_login?: any;
    level: string;
    recommendation: string;
    account: string;
    name: string;
    phone: string;
    phone_check: boolean;
    updated_at: string;
    userid: string;
  };
}

export default function Login() {
  const isLogin =
    useSelector((state: RootState) => state.auth.token) !== undefined;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [errorPostion, setErrorPostion] = useState<string>('none');
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (isLogin) {
      navigate('/mypage');
    }
  }, [isLogin]);

  const validation = () => {
    if (id.length < 3) {
      setErrorPostion('id');
      setErrorMsg('3??? ????????? ???????????? ????????? ?????????.');

      return false;
    } else if (password.length < 8) {
      setErrorPostion('password');
      setErrorMsg('8??? ????????? ??????????????? ????????? ?????????.');

      return false;
    }

    return true;
  };

  const loginButtonClicked = () => {
    const isSuccess = validation();

    if (isSuccess) {
      login(id, password)
        .then((json: LoginState) => {
          dispatch(
            setAuth({
              id: json.user.id,
              userid: json.user.userid,
              name: json.user.name,
              address: json.user.address,
              phone: json.user.phone,
              phoneCheck: json.user.phone_check,
              email: json.user.email,
              emailCheck: json.user.email_check,
              birth: json.user.date_of_birth,
              level: json.user.level,
              recommendation: json.user.recommendation,
              account: json.user.recommendation,
              token: json.refresh,
            })
          );
        })
        .catch((err) => {
          dispatch(
            open({
              content: '???????????? ??????????????????.\n????????? ?????? ??? ????????? ?????????.',
            })
          );
        });
    }
  };

  return (
    <BasicStructure>
      <LoginWrap>
        <LoginText>?????????</LoginText>
        <CustomTextField
          error={errorPostion === 'id'}
          label="?????????"
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
          label="????????????"
          type="password"
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
            ????????????
          </CustomButton>
          <CustomButton variant="outlined" onClick={loginButtonClicked}>
            ?????????
          </CustomButton>
        </BottomButtonWrap>
      </LoginWrap>
    </BasicStructure>
  );
}
