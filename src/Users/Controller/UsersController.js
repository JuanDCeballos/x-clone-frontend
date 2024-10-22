import axios from 'axios';

export async function CreateUser(
  Name,
  UserName,
  Email,
  PassWord,
  Description,
  PhotoURL
) {
  try {
    if (!Name) throw new Error('Name is empty.');
    if (!UserName) throw new Error('User Name is empty.');
    if (!Email) throw new Error('Email is empty.');
    if (!PassWord) throw new Error('Password is empty.');
    if (!Description) throw new Error('Description is empty.');
    if (!PhotoURL) throw new Error('Photo is empty');

    const result = await axios.post('http://localhost:1234/api/v1/User', {
      headers: {
        'Content-Type': 'application/json',
      },

      Name: Name,
      UserName: UserName,
      Email: Email,
      PassWord: PassWord,
      Description: Description,
      Photo: PhotoURL,
    });

    return { ok: true, Token: result.data?.AccessToken };
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
}
