module.exports={
    url: 'https://shop.demoqa.com/product/black-cross-back-maxi-dress/',
    elements: {
        detail_dress: {
            selector: '//input[@name="quantity"]',
            locateStrategy: 'xpath'
        },
        addtocart_btn: {
            selector: '//button[@class="single_add_to_cart_button button alt"]',
            //selector: '//button[@class="single_add_to_cart_button button alt disable wc-variation-selection-needed"]',
            locateStrategy: 'xpath'
        },
        cart_icon_total: {
            //selector: '//*[@id="nav-menu-item-cart"]/a',
            selector: '//a[@class="button wc-forward"]',
            locateStrategy: 'xpath'
        },
        color_dress: {
            selector: '//*[@id="pa_color"]/option[3]',
            locateStrategy: 'xpath'
        },
        size_dress: {
            selector: '//*[@id="pa_size"]/option[4]',
            locateStrategy: 'xpath'
        },
        plus_btn: {
            selector: '//i[@class="icon_plus"]',
            locateStrategy: 'xpath'
        }
    }
}