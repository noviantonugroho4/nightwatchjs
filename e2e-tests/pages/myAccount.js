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
            selector: '//*[@id="noo-site"]/header/div[2]/div/div/div/div/a',
            //selector: '//div[@class="noo-page-breadcrumb"]//child::span[contains(text(), "ToolsQA Demo Site")]',
            locateStrategy: 'xpath'
        }   
    }
}