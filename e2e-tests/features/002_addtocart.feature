#ADD TO CART
@addtocart
Feature: addToCart

@TC_02_001
Scenario: add 7 products to cart
Given user on shop demoqa my account page
When user open the details of the selected product
And user add "7" of the selected product to the cart
Then selected product successfully added to the cart