module.exports={
    url: 'https://shop.demoqa.com/product/black-cross-back-maxi-dress/',
    elements: {
        detail_dress: {
            selector: '//input[@name="quantity"]',
            locateStrategy: 'xpath'
        },
        addtochart_btn: {
            selector: '//*[@id="product-1162"]/div[1]/div[2]/form/div/div[2]/button',
            locateStrategy: 'xpath'
        },
        cart_icon_total: {
            selector: '//*[@class="cart-name-and-total"]',
            locateStrategy: 'xpath'
        },
        color_dress: {
            selector: '//*[@id="pa_color"]/option[3]',
            locateStrategy: 'xpath'
        },
        size_dress: {
            selector: '//*[@id="pa_size"]/option[4]',
            locateStrategy: 'xpath'
        }
    }
}