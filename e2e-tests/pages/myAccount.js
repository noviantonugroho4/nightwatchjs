module.exports={
    url: 'https://shop.demoqa.com/my-account/',
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
        my_account_lbl: {
            selector: '//h1[@class="page-title"]',
            locateStrategy: 'xpath'
        },
        demo_site_link: {
            selector: '//a[@class="home"]',
            locateStrategy: 'xpath'
        }
    }
}