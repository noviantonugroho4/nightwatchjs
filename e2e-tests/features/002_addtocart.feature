#ADD TO CART
@add_toCart
Feature: add toCart

@TC_02_001
Scenario: add product to cart
Given user visit My Account page
When user click Product Detail page
And user add the same "4" products
Then show notif success added the product