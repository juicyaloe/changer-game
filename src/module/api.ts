import { controlError, SignupControlError } from './common';

export async function login(userid: string, password: string) {
  const response = await fetch(
    process.env.REACT_APP_API_DOMAIN + '/auth/login/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userid,
        password,
      }),
    }
  );

  return controlError(response);
}

export async function signup(
  userid: string,
  password: string,
  name: string,
  address: string,
  phone: string,
  phone_check: boolean,
  email: string,
  email_check: boolean,
  date_of_birth: string,
  level: string,
  recommendation: string,
  account: string
) {
  const response = await fetch(
    process.env.REACT_APP_API_DOMAIN + '/auth/signup/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userid,
        password,
        name,
        address,
        phone,
        phone_check,
        email,
        email_check,
        date_of_birth,
        level,
        recommendation,
        account,
      }),
    }
  );

  return SignupControlError(response);
}

export async function fetchImgList() {
  const response = await fetch(process.env.REACT_APP_API_DOMAIN + '/wb/');
  return controlError(response);
}
