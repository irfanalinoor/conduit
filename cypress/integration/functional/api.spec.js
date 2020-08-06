import { 
    USERS_LOGIN_ENDPOINT,
    USERS_SIGNUP_ENDPOINT,
    TAGS_ENDPOINT,
    ARTICLES_ENDPOINT
   } from '../constants/apiEndPoint'

import {
  invalidUserLoginRequestBody,
  userSignUpRequestBody
} from '../../fixtures/fakerRequests'


  describe('API Functional Tests', () => {
  
    context('Test USER-SIGNUP-POST API', () => {

      it('Validate Status 422, response  for EXISTING USER-SIGNUP-POST Request', () => {

        cy.fixture('existingUserSignUpRequest').then((existingUserSignUpRequest)  => {
          cy.request({
            method: 'POST',
            url: USERS_SIGNUP_ENDPOINT, 
            body: existingUserSignUpRequest,
            failOnStatusCode: false
          }).as('userSignUpPostResponse')
        })
        
        cy.get('@userSignUpPostResponse').should((response) => {
          expect(response.status).to.eq(422)
          expect(response.body).to.be.an('object')
          expect(response.body).to.have.property('errors')
        })
      
      })

      it('Validate Status 200, response for NEW USER-SIGNUP-POST Request', () => {

        cy.request('POST',USERS_SIGNUP_ENDPOINT, userSignUpRequestBody()).as('userSignUpPostResponse')

        cy.get('@userSignUpPostResponse').should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.an('object')
          expect(response.body).to.have.property('user')
        })
      
      })
  
    })

    context('Test USER-LOGIN-POST API', () => {
        
      it('Validate Status 422, response  for INVALID USER-LOGIN-POST Request ', () => {

        cy.request({
          method: 'POST',
          url: USERS_LOGIN_ENDPOINT, 
          body: invalidUserLoginRequestBody(),
          failOnStatusCode: false
        }).as('userLoginPostResponse')

        
        cy.get('@userLoginPostResponse').should((response) => {
          expect(response.status).to.eq(422)
          expect(response.body).to.be.an('object')
          expect(response.body).to.have.property('errors')
        })
      
      })

      it('Validate Status 200, response  for VALID USER-LOGIN-POST Request', () => {

        cy.fixture('validLoginRequest').then((validLoginRequest)  => {
          cy.request('POST',USERS_LOGIN_ENDPOINT, validLoginRequest).as('userLoginPostResponse')
        })
        
        cy.get('@userLoginPostResponse').should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.an('object')
          expect(response.body).to.have.property('user')
        })
      
      })
  
    })
  
    context('Test TAGS-GET API', () => {
        
      it('Validate Status 200, response for TAGS-GET Request', () => {

        cy.request('GET',TAGS_ENDPOINT).as('tagsGetResponse')
        
        cy.get('@tagsGetResponse').should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.an('object')
          expect(response.body).to.have.property('tags')
        })
      
      })
  
    })

  })