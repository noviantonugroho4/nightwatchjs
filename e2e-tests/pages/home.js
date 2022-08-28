module.exports={
    url: 'https://shop.demoqa.com/',
    elements: {
        product_link: {
            selector: '//div[@class="noo-product-inner noo-product-inner2"]//child::a[contains(text(), "Tokyo Talkies")]',
            locateStrategy: 'xpath'
        }
    }
}