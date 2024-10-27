import axios from 'axios';

export async function CreateUser(userData) {
  try {
    if (!userData.Name) throw new Error('Name is empty.');
    if (!userData.UserName) throw new Error('User Name is empty.');
    if (!userData.Email) throw new Error('Email is empty.');
    if (!userData.PassWord) throw new Error('Password is empty.');
    if (!userData.Description) throw new Error('Description is empty.');
    if (!userData.PhotoURL) throw new Error('Photo is empty');

    const result = await axios.post('http://localhost:1234/api/v1/User', {
      headers: {
        'Content-Type': 'application/json',
      },

      Name: userData.Name,
      UserName: userData.UserName,
      Email: userData.Email,
      PassWord: userData.PassWord,
      Description: userData.Description,
      Photo: userData.PhotoURL,
    });

    return { ok: true, Token: result.data?.AccessToken };
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
}

export async function GetUserDataByUID(UserUID) {
  try {
    if (!UserUID) throw new Error('UserUID is empty.');

    const result = await axios.get('http://localhost:1234/api/v1/User', {
      headers: {
        authorization: UserUID,
        'Content-Type': 'application/json',
      },
    });

    return result;
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
}

export const getUserByUserName = async (userUID, userName) => {
  try {
    if (!userUID) throw new Error('userUID is empty.');
    if (!userName) throw new Error('userName is empty.');

    const result = await axios.get(
      `http://localhost:1234/api/v1/User/userName/${userName}`,
      {
        headers: {
          authorization: userUID,
          'Content-Type': 'application/json',
        },
      }
    );

    return result;
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
};

export async function GetFollowers(Token) {
  try {
    if (!Token) throw new Error('Token is empty.');

    const result = await axios.get(
      'http://localhost:1234/api/v1/User/Followers',
      {
        headers: {
          authorization: Token,
          'Content-Type': 'application/json',
        },
      }
    );

    return { ok: true, data: result.data.data.followers };
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
}

export async function GetFollowed(Token) {
  try {
    if (!Token) throw new Error('Token is empty.');

    const result = await axios.get(
      'http://localhost:1234/api/v1/User/Followed',
      {
        headers: {
          authorization: Token,
          'Content-Type': 'application/json',
        },
      }
    );

    return { ok: true, data: result.data.data.followed };
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
}
