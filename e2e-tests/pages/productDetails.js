module.exports={
    url: 'https://shop.demoqa.com/product/pink-drop-shoulder-oversized-t-shirt/',
    elements: {
        quantity_input: {
            selector: '//input[@name="quantity"]',
            locateStrategy: 'xpath'
        },
        product_color: {
            selector: '//*[@id="pa_color"]/option[2]',
            locateStrategy: 'xpath'
        },
        product_size: {
            selector: '//*[@id="pa_size"]/option[3]',
            locateStrategy: 'xpath'
        },
        addtocart_btn: {
            selector: '//*[@id="product-1497"]/div[1]/div[2]/form/div/div[2]/button',
            locateStrategy: 'xpath'
        },
        cart_icon: {
            selector: '//*[@class="cart-name-and-total"]',
            locateStrategy: 'xpath'
        }
    }
}