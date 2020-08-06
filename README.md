# conduit [![CircleCI](https://circleci.com/gh/irfanalinoor/conduit/tree/master.svg?style=shield)](https://circleci.com/gh/irfanalinoor/conduit/tree/master)

## Overview
* This is a simple project to showcase Web-UI & Api Test Automation using Cypress
* **Skills:** Setup Automation Framework from scratch for Web-UI + Api testing
* **Languages:** JavaScript/Node.JS
* **SCM:** Git
* **Build/Dependency Management:** Cypress/npm
* **Assertion Lib:** Cypress, Chai
* **CI/CD:** Cypress CircleCI Orb

## Setup
- Download [conduit](https://github.com/irfanalinoor/conduit) project repo from GitHub
- Install latest [Node.JS](https://nodejs.org/en/download/)
- Install [Git](https://git-scm.com/downloads)
- Install [Visual Studio Code](https://code.visualstudio.com/download)
- Navigate to Project Directory in Terminal
- Run `npm install`
- Run `npm install cypress --save-dev`

## Execute Tests
- Run All Tests in Headless Electron `npm run test`
- Run All Tests in Headless Chrome `npm run test:chrome:headless`
- Run All Tests in Headed Chrome `npm run test:chrome:headed`
- Run Web-UI Tests `npm run test:web`
- Run API Tests `npm run test:api`
- Generate JSON Report `npx mochawesome-merge mochawesome-report/*.json > mochawesome.json`
- Generate HTML Report `npx marge mochawesome.json`

## Test Scenarios - [Test Report Summary](http://htmlpreview.github.io/?https://github.com/irfanalinoor/conduit/blob/master/mochawesome-report/mochawesome.html)

````
Web-UI Functional Tests
    Test New User SignUp
      √ Should NOT SignUp with existing user (13662ms)
      √ Should Successfully SignUp new user and LogOut (12378ms)
    Test Existing User SignIn
      √ Should NOT Login with Invalid Email, Password (20063ms)
      √ Should Successfully Login with Valid Email, Password and LogOut (8558ms)
    Validate New Article is Created and Displayed in Feeds
      √ Check Validation Messages on Create Article (9184ms)
      √ SignUp and Create Article using Random User and check Article is shown in Global Feed and My Artiles (49244ms)
      
API Functional Tests
    Test USER-SIGNUP-POST API
      √ Validate Status 422, response  for EXISTING USER-SIGNUP-POST Request (1266ms)
      √ Validate Status 200, response for NEW USER-SIGNUP-POST Request (744ms)
    Test USER-LOGIN-POST API
      √ Validate Status 422, response  for INVALID USER-LOGIN-POST Request  (815ms)
      √ Validate Status 200, response  for VALID USER-LOGIN-POST Request (795ms)
    Test TAGS-GET API
      √ Validate Status 200, response for TAGS-GET Request (1189ms)
    Test GET-GLOBAL-ARTICLE-FEED API
      √ Validate Status 200, response for GET-GLOBAL-ARTICLE-FEED Request (701ms)
