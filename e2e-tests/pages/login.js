module.exports = {
    url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    elements: {
        username_input: {
            selector: '//input[@name="username"]',
            locateStrategy: 'xpath'
        },
        password_input: {
            selector: '//input[@name="password"]',
            locateStrategy: 'xpath'
        },
        login_btn: {
            selector: '//button[contains(@class,"login-button")]',
            locateStrategy: 'xpath'
        },
    }
};