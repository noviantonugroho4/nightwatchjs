module.exports={
    url: 'https://shop.demoqa.com/product/black-lux-graphic-t-shirt/',
    elements: {
        color_btn: {
            selector: '//*[@id="pa_color"]/option[@value="black"]',
            locateStrategy: 'xpath'
        },
        size_btn: {
            selector: '//*[@id="pa_size"]/option[@class="attached enabled"][2]',
            locateStrategy: 'xpath'
        },
        qty_btn: {
            selector: '//input[@name="quantity"]',
            locateStrategy: 'xpath'
        },
        addCart_btn: {
            selector: '//button[@class="single_add_to_cart_button button alt"]',
            locateStrategy: 'xpath'
        },
        addCart_btn: {
            selector: '//button[@class="single_add_to_cart_button button alt"]',
            locateStrategy: 'xpath'
        },
        viewcart_btn: {
            selector: '//a[@class="button wc-forward"]',
            locateStrategy: 'xpath'
        }
    }
}
