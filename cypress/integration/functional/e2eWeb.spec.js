import { webElements } from '../../support/web-element'
const faker = require("faker")
import { 
  EXISTING_EMAIL_ERROR,
  EXISTING_USERNAME_ERROR,
  INVALID_EMAIL_PASSWORD_ERROR,
  BLANK_TITLE_ERROR,
  TITLE_TOO_SHORT_ERROR,
  BLANK_BODY_ERROR,
  BLANK_DESC_ERROR,
  DESC_TOO_SHORT_ERROR
 } from '../constants/validations'
import {
  enterSignUpDetail,
  enterSignInDetail,
  enterArticleDetail
} from '../../support/helper-functions'

const { 
  homeScreen,
  signUpScreen,
  settingScreen,
  signInScreen,
  newArticleScreen
} = webElements

const existingUser = {
  userName : 'john.smith.2020',
  userEmail : 'john.smith.2020@gmail.com',
  userPassword : 'johnsmith2020'
} 

describe('Web-UI Functional Tests', () => {
  
  context('Test New User SignUp', () => {
    beforeEach(() => { 
      cy.visit('/')
    }) 
    
    it('Should NOT SignUp with existing user', () => {
      cy.get(homeScreen.signUpLink).click()
      enterSignUpDetail(existingUser.userName, existingUser.userEmail, existingUser.userPassword)
      cy.get(signUpScreen.signUpButton).click()
      //check existing user sign up error messages
      cy.get(signUpScreen.signUpError).should('be.visible')
      cy.get(signUpScreen.signUpError).contains(EXISTING_EMAIL_ERROR)
      cy.get(signUpScreen.signUpError).contains(EXISTING_USERNAME_ERROR)
    })

    it('Should Successfully SignUp new user and LogOut', () => {
      //Generate Random UserName, Email, Password
      const rand_username = faker.internet.userName()
      const rand_useremail = faker.internet.email()
      const rand_userpassword = faker.internet.password()

      cy.get(homeScreen.signUpLink).click()
      enterSignUpDetail(rand_username, rand_useremail, rand_userpassword)
      cy.get(signUpScreen.signUpButton).click()
      // check home screen show username after successfull sign up
      cy.get(homeScreen.usernameLink).should('be.visible')
      cy.get(homeScreen.usernameLink).contains(rand_username)
      // go to setting and logout 
      cy.get(homeScreen.settingLink).click()
      cy.get(settingScreen.logoutButton).click()
    })
  })

  context('Test Existing User SignIn', () => {
    beforeEach(() => { 
      cy.visit('/')
    }) 

    it('Should NOT Login with Invalid Email, Password', () => {
      
      cy.get(homeScreen.signInLink).click()
      // check error message for empty email, password
      cy.get(signInScreen.signInButton).click()
      cy.wait(2000) //wait for api to respond
      cy.get(signInScreen.signInError).should('be.visible')
      cy.get(signInScreen.signInError).contains(INVALID_EMAIL_PASSWORD_ERROR)

      // check error message for valid email, invalid password
      enterSignInDetail(existingUser.userEmail, 'INVALIDPASWORD')
      cy.get(signInScreen.signInButton).click()
      cy.wait(2000) //wait for api to respond
      cy.get(signInScreen.signInError).should('be.visible')
      cy.get(signInScreen.signInError).contains(INVALID_EMAIL_PASSWORD_ERROR)
      
      // check error message for invalid email, valid password
      enterSignInDetail('INVALID_EMAIL@GMAIL.COM', existingUser.userPassword)
      cy.get(signInScreen.signInButton).click()
      cy.wait(2000) //wait for api to respond
      cy.get(signInScreen.signInError).should('be.visible')
      cy.get(signInScreen.signInError).contains(INVALID_EMAIL_PASSWORD_ERROR)

    })

    it('Should Successfully Login with Valid Email, Password and LogOut', () => {
      
      cy.get(homeScreen.signInLink).click()
      // check error message for empty email, password
      enterSignInDetail(existingUser.userEmail, existingUser.userPassword)
      cy.get(signInScreen.signInButton).click()
      cy.wait(1000) //wait for api to respond
      // check home screen show username after successfull sign up
      cy.get(homeScreen.usernameLink).should('be.visible')
      cy.get(homeScreen.usernameLink).contains(existingUser.userName)
      // go to setting and logout
      cy.get(homeScreen.settingLink).click()
      cy.get(settingScreen.logoutButton).click()
    })
  })

  context('Validate New Article is Created and Displayed in Feeds', () => {
    beforeEach(() => { 
      cy.visit('/')
    })

    it('Check Validation Messages on Create Article', () => {
      cy.get(homeScreen.signInLink).click()
      enterSignInDetail(existingUser.userEmail, existingUser.userPassword)
      cy.get(signInScreen.signInButton).click()
      // Navigate to 'New Article' page
      cy.get(homeScreen.newArticleLink).click()

      // Check Validations on 'New Article' page
      cy.get(newArticleScreen.publishButton).click()
      cy.get(newArticleScreen.articleError).should('be.visible')
      cy.get(newArticleScreen.articleError).contains(BLANK_TITLE_ERROR)
      cy.get(newArticleScreen.articleError).contains(TITLE_TOO_SHORT_ERROR)
      cy.get(newArticleScreen.articleError).contains(BLANK_BODY_ERROR)
      cy.get(newArticleScreen.articleError).contains(BLANK_DESC_ERROR)
      cy.get(newArticleScreen.articleError).contains(DESC_TOO_SHORT_ERROR)
    })

    it('SignUp and Create Article using Random User and check Article is shown in Global Feed and My Artiles', () => {
      //Generate Random UserName, Email, Password
      const randomNewUserName = faker.internet.userName()
      const randomNewUserEmail = faker.internet.email()
      const randomNewUserPassword = faker.internet.password()
      const randomTitle = faker.name.jobTitle()
      const randomDescription = faker.lorem.sentence()
      const randomBody = faker.lorem.paragraphs()
      const randomTags = faker.lorem.words()

      cy.get(homeScreen.signUpLink).click()
      enterSignUpDetail(randomNewUserName, randomNewUserEmail, randomNewUserPassword)
      cy.get(signUpScreen.signUpButton).click()

      // Create new article and submit
      cy.get(homeScreen.newArticleLink).click()
      enterArticleDetail(randomTitle, randomDescription, randomBody, randomTags)
      cy.get(newArticleScreen.publishButton).click()
      cy.wait(2000) //wait for api to respond

      // Go to User My Articles and validate article is created
      cy.get(homeScreen.usernameLink).click()
      cy.wait(1000) //wait for api to respond
      cy.contains(randomTitle)
      
      // Click on Global Feed and Check Loading Articles
      cy.visit('/')
      cy.get(homeScreen.feedToggle).contains('Your Feed')
      cy.get(homeScreen.feedToggle).contains('Global Feed').click()
      cy.contains('Loading articles...')
      cy.contains(randomTitle)
    })
  })
})