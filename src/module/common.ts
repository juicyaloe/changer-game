export async function controlError(
  response: Response,
  success_code: number = 200
) {
  console.log(response, 'response');
  if (response.status === success_code) {
    return await response.json();
  }

  // TODO: 회원가입 용 분리
  if (response.status === 400) {
    const errData = await response.json();
    throw Error(JSON.stringify(errData));
  }

  if (response.status === 401) {
    throw Error('로그인을 해주세요');
  }

  throw Error('Error');
}
