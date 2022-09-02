module.exports={
    url: 'https://shop.demoqa.com/cart/',
    elements: {
        name_tbl: {
            selector: '//td/a[contains(text(), "Tokyo Talkies")]',
            locateStrategy: 'xpath'
        },
        qty_tbl: {
            selector: '//input[@title="Qty"]',
            locateStrategy: 'xpath'
        },
        empty_cart: {
            selector: '//*[@class="empty-cart"]',
            locateStrategy: 'xpath'
        }
    }
}