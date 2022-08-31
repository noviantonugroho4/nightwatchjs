module.exports={
    url: 'https://shop.demoqa.com/cart/',
    elements: {
        product_name: {
            selector: '//td[@class="product-name"]//a',
            locateStrategy: 'xpath'
        },
        product_size: {
            selector: '//dd[@class="variation-Size"]',
            locateStrategy: 'xpath'
        },
        product_qty: {
            selector: '//input[@title="Qty"]',
            locateStrategy: 'xpath'
        },
        clear_cart: {
            selector: '//a[@class="empty-cart"]',
            locateStrategy: 'xpath'
        },
        empty_cart: {
            selector: '//p[@class="cart-empty woocommerce-info"]',
            locateStrategy: 'xpath'
        }

    }
}