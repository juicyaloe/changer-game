import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import BasicStructure from '../../components/structure/basicStructure';

import DaumPostcode from 'react-daum-postcode';

import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import AddressPopup from '../../components/common/addressPopup';
import Checkbox from '@mui/material/Checkbox';
import { open } from '../../store/popupSlice';
import { signup } from '../../module/api';

const Title = styled.div`
  font-size: 1.25rem;
  font-weight: bold;

  padding: 20px 0;
  margin-left: 10px;
`;

const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 15px;

  & div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    gap: 20px;
  }

  & div label {
    display: inline-block;
    width: 120px;
    padding: 0 10px;
  }

  & div input,
  select {
    width: 80%;
    max-width: 240px;
    margin-right: 10px;

    @media screen and (min-width: 769px) {
      width: 250px;
    }
  }

  & .MuiButtonBase-root[type='button'] {
    margin-left: 10px;

    width: 60%;
    max-width: 250px;

    height: 30px;
  }

  & .MuiButtonBase-root[type='submit'] {
    margin-top: 20px;
    width: 80%;
    align-self: center;
  }
`;

interface SignupForm {
  id: string;
  password: string;
  password2: string;
  name: string;
  phone: string;
  address: string;
  detailAddress: string;
  email: string;
  birth: string;
  level: string;
  recommendation: string;
  accountBank: string;
  accountNumber: string;
}

export default function SignUp() {
  const addressPopupRef = useRef<{ open: () => void }>(null);

  const dispatch = useDispatch();
  const { watch, setValue, register, handleSubmit } = useForm<SignupForm>();

  const originPassword = watch('password');

  const onSubmit = handleSubmit(
    async (data) => {
      signup(
        data.id,
        data.password,
        data.name,
        data.address + ' ' + data.detailAddress,
        data.phone,
        phoneCheck,
        data.email,
        emailCheck,
        data.birth,
        data.level,
        data.recommendation,
        data.accountBank + ' ' + data.accountNumber
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
    },
    (error) => {
      const firstKey = Object.keys(error)[0];
      const errorMsg = error[firstKey as keyof SignupForm]?.message;

      dispatch(
        open({
          content: errorMsg ?? '일시적인 오류가 발생했습니다.',
        })
      );
    }
  );

  const [phoneCheck, setPhoneCheck] = useState<boolean>(false);
  const [emailCheck, setEmailCheck] = useState<boolean>(false);

  return (
    <BasicStructure>
      <Title>회원 가입</Title>
      <CustomForm onSubmit={onSubmit}>
        <div>
          <label htmlFor="id">아이디</label>
          <input
            id="id"
            {...register('id', {
              required: '아이디를 3자 이상 입력해주세요.',
              minLength: {
                value: 3,
                message: '아이디를 3자 이상 입력해주세요.',
              },
            })}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            {...register('password', {
              required: '비밀번호를 8자 이상 입력해주세요.',
              minLength: {
                value: 8,
                message: '비밀번호를 8자 이상 입력해주세요.',
              },
            })}
          />
        </div>
        <div>
          <label htmlFor="password2">비밀번호 확인</label>
          <input
            id="password2"
            type="password"
            {...register('password2', {
              validate: (value) =>
                value === originPassword
                  ? true
                  : '비밀번호가 일치하지 않습니다.',
            })}
          />
        </div>

        <Divider sx={{ width: '90%' }} />

        <div>
          <label htmlFor="name">이름</label>
          <input
            id="name"
            {...register('name', {
              required: '이름을 입력해 주세요.',
              minLength: {
                value: 2,
                message: '이름을 입력해 주세요.',
              },
            })}
          />
        </div>
        <div>
          <label htmlFor="phone">휴대전화</label>
          <input
            id="phone"
            {...register('phone', {
              required: '올바른 핸드폰 번호를 입력해 주세요.',
              pattern: {
                value: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
                message: '올바른 핸드폰 번호를 입력해 주세요.',
              },
            })}
          />
        </div>
        <div>
          <label htmlFor="phone-check">수신 동의</label>
          <Checkbox
            id="phone-check"
            style={{ height: '24px', padding: '0px', margin: '0px' }}
            checked={phoneCheck}
            onChange={(e) => setPhoneCheck(e.target.checked)}
          />
        </div>
        <div>
          <label htmlFor="address">주소</label>
          <input id="address" disabled {...register('address')} />
        </div>

        <Button
          variant="contained"
          type="button"
          onClick={() => addressPopupRef.current?.open()}
        >
          주소 선택
        </Button>

        <div>
          <label htmlFor="detailAddress">상세 주소</label>
          <input
            id="detailAddress"
            {...register('detailAddress', {
              required: '상세 주소를 입력해 주세요.',
            })}
          />
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: '올바른 이메일을 입력해 주세요.',
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
                message: '올바른 이메일을 입력해 주세요.',
              },
            })}
          />
        </div>
        <div>
          <label htmlFor="email-check">수신 동의</label>
          <Checkbox
            id="email-check"
            style={{ height: '24px', padding: '0px', margin: '0px' }}
            checked={emailCheck}
            onChange={(e) => setEmailCheck(e.target.checked)}
          />
        </div>
        <div>
          <label htmlFor="birth">생일</label>
          <input
            id="birth"
            {...register('birth', {
              required: 'YYYY-MM-DD 형식으로 생일을 입력해 주세요.',
              pattern: {
                value: /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/,
                message: 'YYYY-MM-DD 형식으로 생일을 입력해 주세요.',
              },
            })}
          />
        </div>
        <div>
          <label htmlFor="level">신분</label>
          <select id="level" size={1} {...register('level')}>
            <option value="학생">학생</option>
            <option value="직장인">직장인</option>
            <option value="기타">기타</option>
          </select>
        </div>

        <Divider sx={{ width: '90%' }} />

        <div>
          <label htmlFor="recommendation">추천인 코드</label>
          <input
            id="recommendation"
            {...register('recommendation', {
              required: '추천인 코드를 입력해 주세요.',
            })}
          />
        </div>
        <div>
          <label htmlFor="accountBank">환불 계좌 은행</label>
          <input
            id="accountBank"
            {...register('accountBank', {
              required: '올바른 은행명을 입력해 주세요.',
            })}
          />
        </div>
        <div>
          <label htmlFor="accountNumber">환불 계좌 번호</label>
          <input
            id="accountNumber"
            {...register('accountNumber', {
              required: '올바른 계좌번호를 입력해 주세요.',
            })}
          />
        </div>

        <Button variant="outlined" type="submit">
          회원가입
        </Button>
      </CustomForm>
      <AddressPopup
        ref={addressPopupRef}
        choiceButtonClicked={(data) => setValue('address', data)}
      />
    </BasicStructure>
  );
}
