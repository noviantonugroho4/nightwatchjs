module.exports={
    url: 'https://shop.demoqa.com/product/tokyo-talkies/',
    elements: {
        color_tokyo_talkies: {
            selector: '//select[@id="color"]',
            locateStrategy: 'xpath'
        },
        select_color_tokyo_talkies: {
            selector: '//option[@value="Black"]',
            locateStrategy: 'xpath'
        },
        size_tokyo_talkies: {
            selector: '//select[@id="size"]',
            locateStrategy: 'xpath'
        },
        select_size_tokyo_talkies: {
            selector: '//option[@value="L"]',
            locateStrategy: 'xpath'
        },
        qty_tokyo_talkies: {
            selector: '//input[@name="quantity"]',
            locateStrategy: 'xpath'
        },
        atc_btn: {
            selector: '//button[@class="single_add_to_cart_button button alt"]',
            locateStrategy: 'xpath'
        }
    }
}