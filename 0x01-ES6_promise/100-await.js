import uploadPhoto from './utils';
import createUser from './utils';

export default async function asyncUploadUser() {
  try {
    // Call both functions asynchronously
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    
    // Return an object with the results
    return {
      photo,
      user,
    };
  } catch (error) {
    // If any of the functions fail, return an object with null values
    return {
      photo: null,
      user: null,
    };
  }
}
