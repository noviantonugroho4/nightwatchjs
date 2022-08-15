const {Given, When} = require('cucumber')
const {client} = require('nightwatch-api')

//Given user visit Xswift page
//User sign in with empty email & password

Given (/^user visit page$/,() => {
    return client.url('https://qa-xswift.xapiens.id')
    .pause(4000)
})

When(/^Invalid Email And Password$/, () => {
    return client
    .useXpath()
    .click('//*[@id="root"]/div/div/div/div[2]/div/div/form/button')
    .pause(4000)
})
