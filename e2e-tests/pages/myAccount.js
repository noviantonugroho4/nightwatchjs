module.exports={
    url: 'https://shop.demoqa.com/',
    elements: {
        email_input: {
            selector: '//input[@id="username"]',
            locateStrategy: 'xpath'
        },
        password_input: {
            selector: '//input[@id="password"]',
            locateStrategy: 'xpath'
        },
        login_btn: {
            selector: '//button[@name="login"]',
            locateStrategy: 'xpath'
        },
        my_account_btn: {
            selector: '//a[contains(text(),"My Account")]',
            locateStrategy: 'xpath'
        },
        shoptools_btn: {
            selector: '//a/img[@class="custom-logo"]',
            locateStrategy: 'xpath'
        }   
    }
}