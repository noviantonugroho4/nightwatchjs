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
            selector: '//div[@class="noo-heading-content"]//child::h1[contains(text(), "My Account")]',
            locateStrategy: 'xpath'
        },
        demo_site_link: {
            selector: '//div[@class="noo-page-breadcrumb"]//child::span[contains(text(), "ToolsQA Demo Site")]',
            locateStrategy: 'xpath'
        }
    }
}