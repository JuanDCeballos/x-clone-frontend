import axios from 'axios';

export async function CreatePost(Content, UserUID) {
  try {
    if (!Content) throw new Error('Content is empty.');
    if (!UserUID) throw new Error('UserUID is empty.');
    const result = await axios.post(
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

    return { ok: result.data.ok, data: result.data.data };
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
}

export async function GetAllPosts(Token, LastPostId, LastPostCreatedAt) {
  try {
    if (!Token) throw new Error('Token is empty.');
    let Body = {};

    if (LastPostId && LastPostCreatedAt) {
      Body = {
        LastPostID: LastPostId,
        LastPostCreatedAt: LastPostCreatedAt,
      };
    }

    const result = await axios.get('http://localhost:1234/api/v1/Posts/all', {
      headers: {
        authorization: Token,
        'Content-Type': 'application/json',
      },
      Body,
    });

    return { ok: true, response: result };
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
}
