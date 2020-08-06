const faker = require("faker")

export function invalidUserLoginRequestBody () {
  const requestBody = { 
    user: {
      email: faker.internet.email(),
      password: faker.internet.password()
    }
  }
  return requestBody
}

export function userSignUpRequestBody () {
  const requestBody = { 
    user: {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    }
  }
  return requestBody
}