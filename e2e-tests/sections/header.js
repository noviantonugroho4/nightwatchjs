const { LocateStrategy } = require("nightwatch/lib/utils");

module.exports = {
    sections: {
        header: {
            selector: '#header',
                elements: {
                    sign_in_btn: {
                        selector: '//*[@class="login"]',
                        locateStrategy: 'xpath'
                    },
                    contact_us_btn: {
                        selector: '//div/a/[contains(text(), "Contact")]',
                        locateStrategy: 'xpath'
                    }
                    
                }
        }
    }
}