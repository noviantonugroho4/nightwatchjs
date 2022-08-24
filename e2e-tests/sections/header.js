module.exports={
    sections:{
        header_menu:{
            selector: '#noo-site > header',
                elements:{
                    notif_demo: {
                        selector: '//a[contains(text(),"Dismiss")]',
                        locateStrategy: 'xpath'
                    },
                    my_account_btn: {
                        selector: '//a[contains(text(),"My Account")]',
                        locateStrategy: 'xpath'
                    }
                }
        }
    }
}
