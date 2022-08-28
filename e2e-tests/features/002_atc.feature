#ADD TO CART
@atc
Feature: addToCart

@TC_02_001
Scenario: user add 6 product to cart
Given user visit home page from My Account page
When user open product detail
And user add "6" of same product to cart
Then product successfully added to cart