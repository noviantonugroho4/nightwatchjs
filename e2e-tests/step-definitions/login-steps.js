const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber')


///////////// Task : Automation Practice /////////////

Given(/^user visit automationpractice page$/, () => {
  const home = client.page.home();

  return home
  .navigate()
  .maximizeWindow()
  .pause(1000)
})

// When (/^user create new account$/, () => {

//   const header = client.page.header();
//   header.expect.section('@header').to.be.visible;

//   const sign_in = header.section.header;

//   return sign_in
//   .expect.section('@sign_in_btn').to.be.visible;
  
//   const authentication = client.page.authentication();
//   return authentication

//   .useXpath()
//   .click('//*[@class="login"]')
//   .waitForElementPresent('@email_input')
//   .setValue('@email_input', 'asd@yopmail.com')
//   .click('@create_account_btn')
//   .pause(5000)
// })

Then (/^user cannot regist new account$/, () => {
  const authentication = client.page.authentication();
  return authentication

  .useXpath()
  .waitForElementPresent('@notif_lbl')
  .assert.containsText('@notif_lbl', )
  .pause(5000)
})


///////////// Task : OrangeHRM /////////////

Given(/^user visit OrangeHRM page$/, () => {
  return client.url(process.env.URL)
  .maximizeWindow()
  .pause(1000)
})

When(/^user sign in with valid username "(.*?)" & password "(.*?)"$/, (username, password) => {
  const login = client.page.login();
  return login
  .navigate()
  .useXpath()
  .setValue('@username_input', username)
  .setValue('@password_input', password)
  .click('@login_btn')
})

When(/^user sign in with valid username "(.*?)" & invalid password "(.*?)"$/, (username, password) => {
  const login = client.page.login();
  return login
  .navigate()
  .useXpath()
  .setValue('@username_input', username)
  .setValue('@password_input', password)
  .click('@login_btn')
})

When(/^user sign in with invalid username "(.*?)" & valid password "(.*?)"$/, (username, password) => {
  const login = client.page.login();
  return login
  .navigate()
  .useXpath()
  .setValue('@username_input', username)
  .setValue('@password_input', password)
  .click('@login_btn')
})

When(/^user sign in with invalid username "(.*?)" & password "(.*?)"$/, (username, password) => {
  const login = client.page.login();
  return login
  .navigate()
  .useXpath()
  .setValue('@username_input', username)
  .setValue('@password_input', password)
  .click('@login_btn')
})

When(/^user sign in with valid username "(.*?)" & empty password "(.*?)"$/, (username, password) => {
  const login = client.page.login();
  return login
  .navigate()
  .useXpath()
  .setValue('@username_input', username)
  // .setValue('@password_input', password)
  .click('@login_btn')
})

When(/^user sign in with empty username "(.*?)" & valid password "(.*?)"$/, (username, password) => {
  const login = client.page.login();
  return login
  .navigate()
  .useXpath()
  // .setValue('@username_input', username)
  .setValue('@password_input', password)
  .click('@login_btn')
})

When(/^user sign in with invalid username "(.*?)" & empty password "(.*?)"$/, (username, password) => {
  const login = client.page.login();
  return login
  .navigate()
  .useXpath()
  .setValue('@username_input', username)
  // .setValue('@password_input', password)
  .click('@login_btn')
})

When(/^user sign in with empty username "(.*?)" & invalid password "(.*?)"$/, (username, password) => {
  const login = client.page.login();
  return login
  .navigate()
  .useXpath()
  // .setValue('@username_input', username)
  .setValue('@password_input', password)
  .click('@login_btn')
})

When(/^user click login button with empty username & password$/, () => {
  const login = client.page.login();
  return login
  .navigate()
  .useXpath()
  .click('@login_btn')
})

Then(/^user direct to homepage "(.*?)"$/, (url) => {
  const login = client.page.login();
  return login
  .navigate()
  .useXpath()
  .assert.urlEquals(url)
  .pause(3000)
})

Then(/^show alert "(.*?)"$/, (notif) => {
  return client
  .useXpath()
  .assert.containsText('//*[contains(@class, "oxd-alert--error")]', notif)
  .pause(3000)
})

Then(/^show alert empty username & password "(.*?)"$/, (notif1) => {
  return client
  .useXpath()
  .waitForElementPresent('//*[contains(@class, "oxd-input-group__message")]')
  .assert.containsText('//*[contains(@class, "oxd-input-group__message")]', notif1)
})

Then(/^show alert empty password "(.*?)"$/, (notif2) => {
  return client
  .useXpath()
  .waitForElementPresent('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/span')
  .assert.containsText('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/span', notif2)
})

Then(/^show alert empty username "(.*?)"$/, (notif3) => {
  return client
  .useXpath()
  .waitForElementPresent('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/span')
  .assert.containsText('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/span', notif3)
})



///////////////////// BATAS //////////////////////

// When(/^I write password '(.*?)'$/, (pass) => {
//   return client
//   .useXpath()
//   .waitForElementPresent('//*[@id="password"]')
//   .pause(2000)
//   .setValue('//*[@id="password"]', pass)
// })

// When(/^I Click Button Login$/, () => {
//   return client
//   .useXpath()
//   .waitForElementPresent('//*[@id="root"]/div/div/div/div[2]/div/div/form/button')
//   .click('//*[@id="root"]/div/div/div/div[2]/div/div/form/button')
//   .pause(2000)
// });

// When(/^I Click Log Out$/, () => {
//   return client
//   .useXpath()
//   .waitForElementPresent('//*[@id="root"]/nav/div/div/img')
//   .click('//*[@id="root"]/nav/div/div/img')
//   .pause(2000)
// });

// Then(/^I success sign in$/, () => {
//   return client
//   .useXpath()
//   .waitForElementPresent(`//*[@id="responsive-navbar-nav"]/div/div/div[2]`)
//   .assert.elementPresent('//*[@id="responsive-navbar-nav"]/div/div/div[2]');
// });

// Then(/^Show Alert Email and Password Empty not Found$/, () => {
//   return client
//   .useXpath()
//   .waitForElementPresent(`//*[@id="root"]/div/div/div/div[2]/div/div/form/div[1]/p`)
//   .assert.elementPresent('//*[@id="root"]/div/div/div/div[2]/div/div/form/div[1]/p');
// });

// Given(/^Redirect Page Login Xswift$/, () => {
//   return client
//   .useXpath()
//   .waitForElementPresent(`//*[@id="root"]/div/div/div/div[2]/div/div/h4`)
//   .assert.elementPresent('//*[@id="root"]/div/div/div/div[2]/div/div/h4');
// });

// When(/^I provide email '(.*?)' and password '(.*?)'$/, (email,pass) => {
//   if (email == null) {
//     email = '';
// }
// if (pass == null) {
//     pass = '';
// }
// return client
// .useXpath()
// .waitForElementPresent(`//*[@id="email"]`)
// .getValue('xpath',`//*[@id="email"]`,function(srcode){
//     srcode = srcode.value;
//     for (var i = 0; i < srcode.length; i++) {
//         client.setValue(`//*[@id="email"]`,'').keys('\ue003')
//     }
// })
// .setValue(`//*[@id="email"]`,email)
// .waitForElementPresent(`//*[@id="password"]`)
// .getValue('xpath',`//*[@id="password"]`,function(srcode){
//     srcode = srcode.value;
//     for (var i = 0; i < srcode.length; i++) {
//         client.setValue(`//*[@id="password"]`,'').keys('\ue003')
//     }
// })
// .setValue(`//*[@id="password"]`,pass)
// .waitForElementPresent(`//button[.='LOGIN']`)
// .click(`//button[.='LOGIN']`);
// });

// When(/^I Click Pop Up Info New Feature After Login$/, () => {
//   return client
//   .useXpath()
//   .waitForElementPresent('/html/body/div[3]/div/div/div[1]/button/span[1]')
//   .click('/html/body/div[3]/div/div/div[1]/button/span[1]')
//   .pause(5000)
// });

// Then(/^Show Alert Password Empty not Found$/, () => {
//   return client
//   .useXpath()
//   .waitForElementPresent(`//*[@id="root"]/div/div/div/div[2]/div/div/form/div[3]/p`)
//   .assert.elementPresent('//*[@id="root"]/div/div/div/div[2]/div/div/form/div[3]/p');
// });

// Then(/^Show Alert email format does not match$/, () => {
//   return client
//   .useXpath()
//   .waitForElementPresent(`//*[@id="root"]/div/div/div/div[2]/div/div/form/div[1]/p`)
//   .assert.elementPresent('//*[@id="root"]/div/div/div/div[2]/div/div/form/div[1]/p');
// });

// Then(/^Show Pop Up Invalid Username and Password$/, () => {
//   return client
//   .useXpath()
//   .waitForElementPresent(`//button[@class='swal-button swal-button--confirm']`)
//   .click(`//button[@class='swal-button swal-button--confirm']`)
//   .pause(2000)
// });

// Given(/^Redirect Homepage After Login$/, () => {
//   return client
//   .useXpath()
//   .waitForElementPresent(`//*[@id="responsive-navbar-nav"]/div/div/div[2]`)
//   .assert.elementPresent('//*[@id="responsive-navbar-nav"]/div/div/div[2]');
// });

// When(/^I Click Icon Profile$/, () => {
//   return client
//   .useXpath()
//   .waitForElementPresent('//*[@id="responsive-navbar-nav"]/div/div/div[2]')
//   .click('//*[@id="responsive-navbar-nav"]/div/div/div[2]')
//   .pause(2000)
// });

// When(/^I Click Logout Akun$/, () => {
//   return client
//   .useXpath()
//   .waitForElementPresent('//*[@id="responsive-navbar-nav"]/div/div/div[2]/div/a[3]')
//   .click('//*[@id="responsive-navbar-nav"]/div/div/div[2]/div/a[3]')
//   .pause(2000)
// });

// Then(/^I Success Logout Akun$/, () => {
//   return client
//   .useXpath()
//   .waitForElementPresent(`//*[@id="root"]/div/div/div/div[2]/div/div`)
//   .assert.elementPresent('//*[@id="root"]/div/div/div/div[2]/div/div');
// });