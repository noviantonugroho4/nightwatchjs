module.exports={
    url: 'https://shop.demoqa.com/product/black-lux-graphic-t-shirt/',
    elements: {
        color_btn: {
            selector: '//*[@id="pa_color"]/option[3]',
            locateStrategy: 'xpath'
        },
        size_btn: {
            selector: '//*[@id="pa_size"]/option[4]',
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
    }
}