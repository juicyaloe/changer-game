import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signup } from '../../module/api';

import { open, close } from '../../store/popupSlice';

import BasicStructure from '../../components/structure/basicStructure';
import Divider from '@mui/material/Divider';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

import NormalTextField from '../../components/common/normalTextField';
import { useDispatch } from 'react-redux';

const SignUpWrap = styled.div`
  width: 100%;
  padding-top: 10px;

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
  align-items: center;
`;

const SignupButton = styled(Button)`
  align-self: flex-end;
`;

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [detailAddress, setDetailAddress] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [birth, setBirth] = useState<string>('');
  const [level, setLevel] = useState<string>('');

  const [phoneCheck, setPhoneCheck] = useState<boolean>(false);
  const [emailCheck, setEmailCheck] = useState<boolean>(false);

  const validation = (): boolean => {
    const phoneReg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    const emailReg =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    const dateReg = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;

    const popupAction = () => {
      console.log('id');
      dispatch(close());
    };

    if (id.length < 3) {
      dispatch(open({ content: '아이디를 3자 이상 입력해주세요.' }));
      return false;
    } else if (password.length < 8) {
      dispatch(open({ content: '비밀번호를 8자 이상 입력해주세요.' }));
      return false;
    } else if (password !== password2) {
      dispatch(open({ content: '비밀번호가 일치하지 않습니다.' }));
      return false;
    } else if (name.length < 2) {
      dispatch(open({ content: '이름을 입력해 주세요.' }));
      return false;
    } else if (!phoneReg.test(phone)) {
      dispatch(open({ content: '올바른 핸드폰 번호를 입력해 주세요.' }));
      return false;
    } else if (address.length < 1) {
      dispatch(open({ content: '주소를 선택해 주세요.' }));
      return false;
    } else if (detailAddress.length < 1) {
      dispatch(open({ content: '상세 주소를 입력해 주세요.' }));
      return false;
    } else if (!emailReg.test(email)) {
      dispatch(open({ content: '올바른 이메일을 입력해 주세요.' }));
      return false;
    } else if (!dateReg.test(birth)) {
      dispatch(open({ content: 'YYYY-MM-DD 형식으로 생일을 입력해 주세요.' }));
      return false;
    } else if (level.length < 1) {
      dispatch(open({ content: '직급을 입력해 주세요.' }));
      return false;
    }

    return true;
  };

  const signupButtonClicked = () => {
    const isSuccess = validation();

    if (isSuccess) {
      signup(
        id,
        password,
        name,
        address + ' ' + detailAddress,
        phone,
        phoneCheck,
        email,
        emailCheck,
        birth,
        level
      )
        .then((response) => {
          dispatch(
            open({
              content:
                '회원가입에 성공했습니다!\n해당 아이디로 로그인 해주세요.',
              navigateUrl: '/login',
            })
          );
        })
        .catch((err: Error) => {
          switch (err.message) {
            case 'userid':
              dispatch(
                open({
                  content:
                    '이미 존재하는 아이디입니다.\n다른 아이디를 입력해 주세요.',
                })
              );
              break;
            case 'phone':
              dispatch(
                open({
                  content:
                    '이미 가입된 핸드폰 번호입니다.\n다른 핸드폰 번호를 입력해 주세요.',
                })
              );
              break;
            case 'email':
              dispatch(
                open({
                  content:
                    '이미 등록되어 있는 이메일입니다.\n다른 이메일을 입력해 주세요.',
                })
              );
              break;
            case 'birth':
              dispatch(
                open({
                  content:
                    '올바르지 않은 생일입니다.\n정확한 생일을 입력해 주세요.',
                })
              );
              break;
            default:
              dispatch(open({}));
              break;
          }
        });
    }
  };

  return (
    <BasicStructure>
      <SignUpText>회원가입</SignUpText>
      <Divider />
      <SignUpWrap>
        <NormalTextField
          id="id"
          text="아이디"
          value={id}
          onChangeValue={setId}
        />
        <NormalTextField
          id="password"
          text="비밀번호"
          value={password}
          onChangeValue={setPassword}
          mode="password"
        />
        <NormalTextField
          id="password2"
          text="비밀번호 확인"
          value={password2}
          onChangeValue={setPassword2}
          mode="password"
        />
        <Divider sx={{ width: '100%' }} />
        <NormalTextField
          id="name"
          text="이름"
          value={name}
          onChangeValue={setName}
        />
        <RowWrap>
          <NormalTextField
            id="phone"
            text="휴대전화"
            value={phone}
            onChangeValue={setPhone}
          />
          <div style={{ marginLeft: '10px' }}>
            <label htmlFor="phone-check">수신 동의:</label>
            <Checkbox
              id="phone-check"
              checked={phoneCheck}
              onChange={(e) => setPhoneCheck(e.target.checked)}
            />
          </div>
        </RowWrap>

        <NormalTextField
          id="address"
          text="주소"
          value={address}
          onChangeValue={setAddress}
          mode="address"
        />
        <NormalTextField
          id="detail-address"
          text="상세 주소"
          value={detailAddress}
          onChangeValue={setDetailAddress}
        />
        <Divider sx={{ width: '100%' }} />
        <RowWrap>
          <NormalTextField
            id="email"
            text="이메일"
            value={email}
            onChangeValue={setEmail}
          />
          <div style={{ marginLeft: '10px' }}>
            <label htmlFor="email-check">수신 동의:</label>
            <Checkbox
              id="email-check"
              checked={emailCheck}
              onChange={(e) => setEmailCheck(e.target.checked)}
            />
          </div>
        </RowWrap>

        <NormalTextField
          id="birth"
          text="생일"
          value={birth}
          onChangeValue={setBirth}
        />
        <NormalTextField
          id="level"
          text="직급"
          value={level}
          onChangeValue={setLevel}
        />
        <Divider sx={{ width: '100%' }} />
        <SignupButton variant="contained" onClick={signupButtonClicked}>
          회원가입
        </SignupButton>
      </SignUpWrap>
    </BasicStructure>
  );
}
