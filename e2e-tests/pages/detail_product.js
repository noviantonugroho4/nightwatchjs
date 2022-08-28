module.exports={
    url: 'https://shop.demoqa.com/product/tokyo-talkies/',
    elements: {
        detail_tokyo_talkies: {
            selector: '//input[@name="quantity"]',
            locateStrategy: 'xpath'
        },
        atc_btn: {
            selector: '//button[@class="single_add_to_cart_button button alt"]',
            locateStrategy: 'xpath'
        },
        cart_icon: {
            selector: '//*[@class="cart-name-and-total"]',
            locateStrategy: 'xpath'
        }
    }
}