module.exports={
    url: 'https://shop.demoqa.com/',
    elements: {
        product_btn: {
            selector: '(//div[@class="noo-product-thumbnail"]//following-sibling::h3)[3]',
            locateStrategy: 'xpath'
        }
    }
}