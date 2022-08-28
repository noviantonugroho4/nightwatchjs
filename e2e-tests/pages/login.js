const { LocateStrategy } = require("nightwatch/lib/utils");

module.exports = {
    elements: {
        username_input: {
            selector: '//input[@name="username"]',
            locateStrategy: 'xpath'
        },
        password_input: {
            selector: '//input[@name="password"]',
            locateStrategy: 'xpath'
        },
        login_button: {
            selector: '//button[@type="submit"]',
            locateStrategy: 'xpath'
        }
    }
}