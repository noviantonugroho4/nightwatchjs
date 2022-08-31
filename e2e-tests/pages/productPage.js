module.exports={
    url: 'https://shop.demoqa.com',
    elements: {
        product_site: {
            selector: '(//div[@class="noo-product-thumbnail"]//following-sibling::h3)[1]',
            locateStrategy: 'xpath'
        }
    }
    
}