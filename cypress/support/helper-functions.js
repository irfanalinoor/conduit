import { webElements } from './web-element'

const { 
  signUpScreen,
  newArticleScreen
} = webElements

export function enterSignUpDetail (username, email, password) {
  cy.get(signUpScreen.userNameField).clear().type(username)
  cy.get(signUpScreen.userEmailField).clear().type(email)
  cy.get(signUpScreen.userPasswordField).clear().type(password)
}

export function enterSignInDetail (email, password) {
  cy.get(signUpScreen.userEmailField).clear().type(email)
  cy.get(signUpScreen.userPasswordField).clear().type(password)
}

export function enterArticleDetail (title, description, body, tags) {
  cy.get(newArticleScreen.articleTitleField).clear().type(title)
  cy.get(newArticleScreen.articleDescField).clear().type(description)
  cy.get(newArticleScreen.articleBodyField).clear().type(body)
  cy.get(newArticleScreen.articleTagsField).clear().type(tags)
}