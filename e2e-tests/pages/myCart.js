module.exports={
    url: 'https://shop.demoqa.com/cart/',
    elements: {
        product_name: {
            selector: '//*[@id="product-1497"]/div[1]',
            locateStrategy: 'xpath'
        },
        product_qty: {
            selector: '//input[@title="Qty"]',
            locateStrategy: 'xpath'
        },
    }
}