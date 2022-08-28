// const { LocateStrategy } = require("nightwatch/lib/utils");

const { LocateStrategy } = require("nightwatch/lib/utils");

module.exports = {
    url: 'http://automationpractice.com/index.php?controller=authentication&back=my-account',
    elements: {
        email_input: {
            selector: '//input[@name="email_create"]',
            locateStrategy: 'xpath'
        },
        create_account_btn: {
            selector: '//*[@id="SubmitCreate"]',
            locateStrategy: 'xpath'
        },
        globalErrorMessage_label: {
            selector: '//*[contains(text(), "An account using this email address has already been registered. Please enter a valid password or request a new one.")]',
            locateStrategy: 'xpath'
        }
    }
}