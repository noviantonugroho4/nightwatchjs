const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber');
const { url } = require('../pages/home');

require('dotenv').config();

// When(/^user sign with username "(.*?)" & password "(.*?)"$/, (username, password) => {

//   const login = client.page.login();

//   return login
//   .navigate()
//   .useXpath()
//   .setValue('@username_input', username)
//   .setValue('@password_input', password)
//   .click('@login_btn')
//   .pause(5000)
//   // .setValue('@password_input', password)
//   .click('//button[contains(@class, "button")]')
  
//   // .setValue('@username_field', email)
//   // .setValue('//*[@name="password"]', password)
//   // .click('//button[contains(@class, "button")]')
// })

// Then(/^user direct to home page "(.*?)"$/, (url) => {
//   return client
//   .useXpath()
//   .assert.urlEquals(url)
//   .waitForElementPresent('//img[contains(@alt, "brand banner")]')
//   // .expect.element('//*[@id="menu_admin_viewAdminModule"]').attribute('text').equal('Admin')
//   // .assert.textContains('//*[@id="menu_admin_viewAdminModule"]', 'min')
// })


Given(/^user visit orangeHRM page$/, () => {
  const home = client.page.home();

  client.url(process.env.URL)

  return home
  // .navigate()
  .maximizeWindow()
  .assert.urlContains(url)
})

When(/^user sign with username "(.*?)" & password "(.*?)"$/, (usename, password) => {
  const login = client.page.login();

  return login
  .waitForElementPresent('@username_input')
  .setValue('@username_input', usename)
  .setValue('@password_input', password)
  .click('@login_btn')
})

Then(/^user direct to home page "(.*?)"$/, (url) => {
  return client
  .assert.urlContains(url)
})