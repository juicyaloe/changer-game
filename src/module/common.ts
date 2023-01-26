export async function controlError(
  response: Response,
  success_code: number = 200
) {
  if (response.status === success_code) {
    return await response.json();
  }

  if (response.status === 401) {
    throw Error('로그인을 해주세요');
  }

  throw Error('Error');
}
