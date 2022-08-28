const { LocateStrategy } = require("nightwatch/lib/utils");

module.exports = {
    elements: {
        signin_btn: {
            selector: '//*[@class="login"]',
            LocateStrategy: 'xpath'
        }
    }
}