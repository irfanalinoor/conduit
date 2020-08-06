export const webElements = {
  homeScreen: {
    signUpLink: 'a[href="#/register"]',
    signInLink: 'a[href="#/login"]',
    loginButton: 'input[id="login-form:login"]',
    usernameLink: 'a[ui-sref="app.profile.main({ username: $ctrl.currentUser.username })"]',
    settingLink: 'a[href="#/settings"]',
    feedToggle: 'div[class="feed-toggle"]',
    newArticleLink: 'a[href="#/editor/"]',
    homeLink: 'a[href="#/"]'
  },
  signUpScreen: {
    userNameField: 'input[ng-model="$ctrl.formData.username"]',
    userEmailField: 'input[ng-model="$ctrl.formData.email"]',
    userPasswordField: 'input[ng-model="$ctrl.formData.password"]',
    signUpButton: 'button[type="submit"]',
    signUpError: 'ul[class="error-messages"]'
  },
  settingScreen: {
    userNameField: 'input[ng-model="$ctrl.formData.username"]',
    userEmailField: 'input[ng-model="$ctrl.formData.email"]',
    logoutButton: 'button[ng-click="$ctrl.logout()"]'
  },
  signInScreen: {
    userEmailField: 'input[ng-model="$ctrl.formData.email"]',
    userPasswordField: 'input[ng-model="$ctrl.formData.password"]',
    signInButton: 'button[type="submit"]',
    signInError: 'ul[class="error-messages"]'
  },
  newArticleScreen: {
    articleTitleField: 'input[ng-model="$ctrl.article.title"]',
    articleDescField: 'input[ng-model="$ctrl.article.description"]',
    articleBodyField: 'textarea[ng-model="$ctrl.article.body"]',
    articleTagsField: 'input[ng-model="$ctrl.tagField"]',
    publishButton: 'button[ng-click="$ctrl.submit()"]',
    articleError: 'ul[class="error-messages"]'
  }
}