module.exports={
    url: 'https://shop.demoqa.com/cart/',
    elements: {
        name_tbl: {
            selector: '//*[@class="product-name"]//child::a[contains(text(), "Tokyo Talkies")]',
            locateStrategy: 'xpath'
        },
        qty_tbl: {
            selector: '//input[@title="Qty"]',
            locateStrategy: 'xpath'
        },
    }
}