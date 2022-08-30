module.exports={
    url: 'https://shop.demoqa.com',
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
        shop_qa_site: {
            selector: '//*[@id="noo-site"]/section/div/div/div/span[1]/a',
            locateStrategy: 'xpath'
        }
    }
}