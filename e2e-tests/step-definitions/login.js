const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber');

Given(/^user visit shop demoqa page$/, () => {
    return client
    .url(process.env.URL)
    .maximizeWindow()
    .useXpath()
    .waitForElementPresent('//a[contains(@class,"notice")]')
    .click('//a[contains(@class,"notice")]')
})

When(/^user sign with (.*?) & (.*?)$/, (username, password) => {
    // data = data.rows();
    const myAccount_page = client.page.myAccount();

    const header_section = myAccount_page.page.header();
    header_section.expect.section('@header_menu').to.be.visible;
    
    // const elements = header_section.section.header_menu
    // elements.expect.element('@my_account_btn').to.be.visible;

    return myAccount_page
    .click('@my_account_btn')
    .waitForElementPresent('@email_input')
    .setValue('@email_input', username)
    .setValue('@password_input', password)
    .click('@login_btn')
    .pause(2000)
})
// user direct to my account page and login as <users> and then logout
Then(/^user direct to my account page and login as (.*?) and then logout$/, (users) => {
    const myAccount_page = client.page.myAccount();
    
    return myAccount_page
    
    // .assert.urlEquals()
    // .assert.containsText('//strong[1][contains(text(),"asdasdasd")]', users)
    .waitForElementPresent('@log_out_btn')
    // .moveToElement('//a[contains(text(), "Log out")]',0,0)
    .click('@log_out_btn')
    .pause(3000);

})
