export async function controlError(
  response: Response,
  success_code: number = 200
) {
  if (response.status === success_code) {
    return await response.json();
  }

  if (response.status === 401) {
    throw Error('AuthError');
  }

  throw Error('NetworkError');
}

export async function SignupControlError(response: Response) {
  if (response.status === 201) {
    return await response.json();
  }

  if (response.status === 400) {
    const json: Object = await response.json();
    console.log(json);

    if (json.hasOwnProperty('userid')) {
      throw Error('userid');
    } else if (json.hasOwnProperty('phone')) {
      throw Error('phone');
    } else if (json.hasOwnProperty('email')) {
      throw Error('email');
    } else if (json.hasOwnProperty('date_of_birth')) {
      throw Error('birth');
    }
  }

  throw Error('NetworkError');
}
