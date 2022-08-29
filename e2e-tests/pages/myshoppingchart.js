module.exports={
    url: 'https://shop.demoqa.com/cart/',
    elements: {
        nama_product: {
            selector: '//*[@class="product-name"]//child::a[contains(text(), "Black Cross Back Maxi Dress")]',
            locateStrategy: 'xpath'
        },
        qty_product: {
            selector: '//input[@title="Qty"]',
            locateStrategy: 'xpath'
        },
    }
}