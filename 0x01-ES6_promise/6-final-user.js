import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default async function handleProfileSignup(firstName, lastName, filename) {
  const result = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(filename)
  ])
  return result.map(({ status, value, reason }) => {
    status:
    value: status === 'fulfilled' ? value : `${reason}`
  });
}
