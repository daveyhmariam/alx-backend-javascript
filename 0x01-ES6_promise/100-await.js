import uploadPhoto from './utils'
import createUser from './utils'

export default async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([createUser(), uploadPhoto()]);
    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
