#ADD TO CART
@atc
Feature: addToCart

@TC_02_001
Scenario: user add 6 product to cart
Given user on my account page
When user visit home page
And user add 6 product to cart
Then product successfully added to cart