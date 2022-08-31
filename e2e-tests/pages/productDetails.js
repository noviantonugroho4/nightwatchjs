module.exports={
    url: 'https://shop.demoqa.com/product/pink-drop-shoulder-oversized-t-shirt/',
    elements: {
        product_name: {
            selector: '//h1[@class="product_title entry-title"]',
            locateStrategy: 'xpath'
        },
        quantity_input: {
            selector: '//input[@name="quantity"]',
            locateStrategy: 'xpath'
        },
        product_color: {
            selector: '//select[@id="pa_color"]/option[@value="pink"]',
            locateStrategy: 'xpath'
        },
        product_size: {
            selector: '//select[@id="pa_size"]/option[@value=37]',
            locateStrategy: 'xpath'
        },
        addtocart_btn: {
            selector: '//button[@class="single_add_to_cart_button button alt"]',
            locateStrategy: 'xpath'
        },
        cart_icon: {
            selector: '//span[@class="cart-name-and-total"]',
            locateStrategy: 'xpath'
        }
    }
}