module.exports={
    url: 'https://shop.demoqa.com/my-account/',
    elements: {
        username_input: {
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
        demo_site_lbl: {
            selector: '//a[@class="home"]',
            locateStrategy: 'xpath'
        }  
    }
}