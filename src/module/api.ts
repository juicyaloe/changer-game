import { controlError } from './common';

export async function fetchImgList() {
  const response = await fetch(process.env.REACT_APP_API_DOMAIN + '/wb/');
  return controlError(response);
}
