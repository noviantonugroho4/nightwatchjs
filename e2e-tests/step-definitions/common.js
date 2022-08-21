const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber')

Given(/^user visit automationpractice page$/, () => {
    const home = client.page.home();

    return home
    .navigate()
    .maximizeWindow()
    .pause(1000)
})

Given(/^user on (.*?) page$/, (page) => {
    console.log(page)
    if (page == 'PIM') {
        client.assert.urlEquals('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
    }
    // if (page == Admin) {
        
    // } else {
        
    // }
})

When(/^user click (.*?) button on home page$/, (button) => {
    console.log(button)
    if (button == 'Admin') {
        client.click('//li[1][contains(@class, "oxd-main-menu-item-wrapper")]')
    }
    if (button == 'PIM') {
        client.click('//li[2][contains(@class, "oxd-main-menu-item-wrapper")]')
    }
    return client
    .pause(1000)
})