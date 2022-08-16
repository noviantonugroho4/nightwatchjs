const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber')

Given(/^user visit orangeHRM page$/, () => {
  return client.url(process.env.URL)
  .maximizeWindow()
  .pause(1000)
})

When(/^user sign with username "(.*?)" & password "(.*?)"$/, (email, password) => {
  return client
  .useXpath()
  .waitForElementPresent('//*[@id="txtUsername"]')
  .setValue('//*[@id="txtUsername"]', email)
  .setValue('//*[@id="txtPassword"]', password)
  .click('//*[@id="btnLogin"]')
})

Then(/^user direct to home page "(.*?)"$/, (url) => {
  return client
  .useXpath()
  .assert.urlEquals(url)
  .waitForElementPresent('//*[@id="menu_admin_viewAdminModule"]')
  .expect.element('//*[@id="menu_admin_viewAdminModule"]').attribute('text').equal('Admin')
  // .assert.textContains('//*[@id="menu_admin_viewAdminModule"]', 'min')
})
