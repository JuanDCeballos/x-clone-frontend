import axios from 'axios';
import { getEnvironments } from '../../Common/Functions';
const { API_URL } = getEnvironments();

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export async function LogInWithUserName(UserName, PassWord) {
  try {
    if (!UserName) throw new Error('UserName is empty.');
    if (!PassWord) throw new Error('PassWord is empty.');

    const result = await axios.post(
      'http://localhost:1234/api/v1/Auth/Session/UserName',
      {
        UserName: UserName,
        passWord: PassWord,
      },
      config
    );

    return {
      ok: true,
      Token: result.data.AccessToken,
    };
  } catch (error) {
    console.error(
      `[Server Error] status: ${
        error.response.status
      } payload: ${JSON.stringify(error.response.data)}`
    );

    console.log(error.response.data.errorDescription);

    return {
      ok: false,
      UserNotFound: error.response.data.errorDescription === 'User not found.',
    };
  }
}

export async function LogInWithEmail(Email, PassWord) {
  try {
    if (!Email) throw new Error('Email is empty.');
    if (!PassWord) throw new Error('PassWord is empty.');

    const result = await axios.post(
      'http://localhost:1234/api/v1/Auth/Session/Email',
      {
        email: Email,
        passWord: PassWord,
      },
      config
    );

    return {
      ok: true,
      Token: result.data.AccessToken,
    };
  } catch (error) {
    console.error(
      `[Server Error] status: ${
        error.response.status
      } payload: ${JSON.stringify(error.response.data)}`
    );

    console.log(error.response.data.errorDescription);

    return {
      ok: false,
      UserNotFound: error.response.data.errorDescription === 'User not found.',
    };
  }
}
