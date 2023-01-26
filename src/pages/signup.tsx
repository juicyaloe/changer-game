import BasicStructure from '../components/structure/basicStructure';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

import { signup } from '../module/api';
import { useNavigate } from 'react-router-dom';

const SignUpWrap = styled.div`
  width: 100%;
  padding-top: 10px;
  margin-left: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 10px;
`;

const SignUpText = styled.span`
  padding-top: 10px;
  display: inline-block;
  font-size: 1.25rem;
  font-weight: bold;
`;

const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  gap: 20px;
`;

const CheckBoxWrap = styled.div`
  align-self: flex-end;
`;

const CustomButton = styled(Button)`
  align-self: center;
  margin-top: 20px;
`;

export default function SignUp() {
  const navigate = useNavigate();
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [birth, setBirth] = useState<string>('');
  const [level, setLevel] = useState<string>('');

  const [phoneCheck, setPhoneCheck] = useState<boolean>(false);
  const [emailCheck, setEmailCheck] = useState<boolean>(false);

  // TODO: 메시지 제거
  const [msg, setmsg] = useState<string>('회원가입 테스트 메시지');

  const signUpButtonClicked = () => {
    signup(
      id,
      password,
      name,
      address,
      phone,
      phoneCheck,
      email,
      emailCheck,
      birth,
      level
    )
      .then((json) => {
        navigate('/login');
      })
      .catch((err: Error) => {
        setmsg(err.message);
      });
  };

  return (
    <BasicStructure>
      <SignUpText>회원가입</SignUpText>
      <Divider />
      <SignUpWrap>
        <TextField
          error={false}
          value={id}
          onChange={(e) => setId(e.target.value)}
          label="아이디"
          variant="standard"
        />
        <RowWrap>
          <TextField
            error={false}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="비밀번호"
            variant="standard"
          />
          <TextField
            error={false}
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            label="비밀번호 확인"
            variant="standard"
          />
        </RowWrap>
        <RowWrap>
          <TextField
            error={false}
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="이름"
            variant="standard"
          />
          <TextField
            error={false}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            label="휴대전화"
            variant="standard"
          />
          <CheckBoxWrap>
            SMS 수신:{' '}
            <Checkbox
              checked={phoneCheck}
              onChange={(e) => setPhoneCheck(e.target.checked)}
            />
          </CheckBoxWrap>
        </RowWrap>
        <RowWrap>
          <TextField
            error={false}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            label="주소"
            variant="standard"
          />
          <TextField
            error={false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="이메일"
            variant="standard"
          />
          <CheckBoxWrap>
            이메일 수신:{' '}
            <Checkbox
              checked={emailCheck}
              onChange={(e) => setEmailCheck(e.target.checked)}
            />
          </CheckBoxWrap>
        </RowWrap>
        <RowWrap>
          <TextField
            error={false}
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
            label="생년월일"
            variant="standard"
          />
          <TextField
            error={false}
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            label="신분"
            variant="standard"
          />
        </RowWrap>

        <CustomButton variant="outlined" onClick={signUpButtonClicked}>
          회원가입
        </CustomButton>
        {msg}
      </SignUpWrap>
    </BasicStructure>
  );
}
