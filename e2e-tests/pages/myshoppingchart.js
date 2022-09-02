module.exports={
    url: 'https://shop.demoqa.com/cart/',
    elements: {
        nama_product: {
            selector: '//td/a[contains(text(), "Black Cross Back Maxi Dress")]',
            locateStrategy: 'xpath'
        },
        qty_product: {
            selector: '//input[@title="Qty"]',
            locateStrategy: 'xpath'
        },
        hapuscart: {
            selector: '//*[@class="empty-cart"]',
            locateStrategy: 'xpath'
        },
        cartkosong: {
            selector: '//p[@class="cart-empty woocommerce-info"]',
            locateStrategy: 'xpath'
        }
    }
}