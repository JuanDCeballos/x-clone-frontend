import axios from 'axios';

export async function CreatePost(Content, UserUID) {
  try {
    if (!Content) throw new Error('Content is empty.');
    if (!UserUID) throw new Error('UserUID is empty.');
    await axios.post(
      'http://localhost:1234/api/v1/posts',
      {
        content: Content,
      },
      {
        headers: {
          authorization: UserUID,
          'Content-Type': 'application/json',
        },
      }
    );

    return { ok: true };
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
}
