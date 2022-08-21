module.exports = {
    elements: {
        email_input: {
            selector: '//*[@id="email_create"]',
            locateStrategy: 'xpath'
        },
        create_account_btn: {
            selector: '//*[@id="SubmitCreate"]',
            locateStrategy: 'xpath'
        },
        notif_lbl: {
            selector: '//*[@id="create_account_error"]/ol/li',
            locateStrategy: 'xpath'
        }
    }
}