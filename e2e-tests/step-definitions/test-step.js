const { client } = require('nightwatch-api')
const { Given, Then, When } = require('cucumber')

Given(/^user visit automationpractice page$/, () => {
    const home = client.page.home_1();

    return home
    .navigate()
    .maximizeWindow()
    .pause(1000)
})

When(/^user create new account$/, () => {

    const header = client.page.header();
    header.expect.section('@header').to.be.visible;

    const sign_in = header.section.header;

    return sign_in
    .waitForElementPresent('@sign_in_btn')
    // .assert.waitForElementVisible('@sign_in_btn')
    .click('@sign_in_btn')
    .pause(5000)


    // const menuSection = test.section.nav_menu;
    // menuSection.expect.element('@sign_in').to.be.visible;
    // menuSection.click('@sign_in');

    // home.expect.element('@kepala').to.be.visible;
    // return home
    // .navigate()
    // .maximizeWindow()
    // .pause(1000)
})

// Given(/^user on (.*?) page$/, (page) => {
//     console.log(page)
//     if (page == 'PIM') {
//         client.assert.urlEquals('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
//     }
//     // if (page == Admin) {
        
//     // } else {
        
//     // }
// })

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