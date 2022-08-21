const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber')


When(/^user sign with username "(.*?)" & password "(.*?)"$/, (username, password) => {

  const login = client.page.login();

  return login
  .navigate()
  .useXpath()
  .setValue('@username_input', username)
  .setValue('@password_input', password)
  .click('@login_btn')
  .pause(5000)
  // .setValue('@password_input', password)
  // .click('//button[contains(@class, "button")]')
  
  // .setValue('@username_field', email)
  // .setValue('//*[@name="password"]', password)
  // .click('//button[contains(@class, "button")]')
})

Then(/^user direct to home page "(.*?)"$/, (url) => {
  return client
  .useXpath()
  .assert.urlEquals(url)
  .waitForElementPresent('//img[contains(@alt, "brand banner")]')
  // .expect.element('//*[@id="menu_admin_viewAdminModule"]').attribute('text').equal('Admin')
  // .assert.textContains('//*[@id="menu_admin_viewAdminModule"]', 'min')
})
