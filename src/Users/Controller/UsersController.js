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
