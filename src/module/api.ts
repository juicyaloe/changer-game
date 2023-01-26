import { controlError } from './common';

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

export async function fetchImgList() {
  const response = await fetch(process.env.REACT_APP_API_DOMAIN + '/wb/');
  return controlError(response);
}
