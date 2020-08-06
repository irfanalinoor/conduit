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
- Generate JSON Report `npm run test:report:json`
- Generate HTML Report `npm run test:report:html`