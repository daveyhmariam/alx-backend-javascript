# 0x01. ES6 Promises

## Description
This project explores JavaScript ES6 Promises, focusing on how to handle asynchronous operations in JavaScript. You'll learn how to create and manage promises, use `then`, `catch`, and `finally`, and work with the `async` and `await` keywords.

## Learning Objectives
By the end of this project, you should be able to:
- Explain Promises: how, why, and what they are.
- Use `then`, `resolve`, and `catch` methods.
- Use all methods of the `Promise` object.
- Understand `throw` and `try`.
- Work with the `await` operator and `async` functions.

## Requirements
- All code will be executed on Ubuntu 18.04 LTS using Node.js 12.11.x.
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- All files should end with a new line.
- A `README.md` file, at the root of the folder of the project, is mandatory.
- Code should use the `.js` extension.
- Code will be tested using Jest and the command `npm run test`.
- Code will be verified against lint using ESLint.
- All functions must be exported.

## Setup
### Install Node.js 12.11.x
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v # should output v12.11.1
npm -v # should output 6.11.3


## Tasks

### 0. Keep every promise you make and only make promises you can keep
- **File:** `0-promise.js`
- **Description:** Return a Promise using the function `getResponseFromAPI`.

### 1. Don't make a promise...if you know you can't keep it
- **File:** `1-promise.js`
- **Description:** Return a promise that resolves or rejects based on a boolean parameter using `getFullResponseFromAPI`.

### 2. Catch me if you can!
- **File:** `2-then.js`
- **Description:** Handle promise resolutions and rejections with proper logging using `handleResponseFromAPI`.

### 3. Handle multiple successful promises
- **File:** `3-all.js`
- **Description:** Resolve multiple promises and log user details using `handleProfileSignup`.

### 4. Simple promise
- **File:** `4-user-promise.js`
- **Description:** Return a resolved promise containing user details with `signUpUser`.

### 5. Reject the promises
- **File:** `5-photo-reject.js`
- **Description:** Return a rejected promise with an error message for invalid filenames using `uploadPhoto`.

### 6. Handle multiple promises
- **File:** `6-final-user.js`
- **Description:** Handle multiple promises and return an array with the promise results using `handleProfileSignup`.

### 7. Load balancer
- **File:** `7-load_balancer.js`
- **Description:** Return the result of the first resolved promise using `loadBalancer`.

### 8. Throw error / try catch
- **File:** `8-try.js`
- **Description:** Implement a function that throws an error if the denominator is zero in `divideFunction`.

### 9. Throw an error
- **File:** `9-try.js`
- **Description:** Handle errors and guardrail logic using `guardrail`.