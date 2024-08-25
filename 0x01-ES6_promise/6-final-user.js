import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((results) => {
      const result = [];
      results.forEach((value) => {
        if (value.status === 'fulfilled') {
          result.push({status: value.status, value: value.value});
        } else {
          result.push({status: value.status, value: `${value.reason}`});
        }
      });
      return result;
    });
}
