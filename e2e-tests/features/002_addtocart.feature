#ADD TO CART
@addtocart
Feature: addtocart

@TC_02_001
Scenario: add 7 products to cart
# Given user open shop demoqa my account page
When user click Tools Demo QA Site
And user click the product
Then user should see detail product page
# When user select the color "pink" of product
# And user select the size "37" of product 
When user select the color of product
And user select the size of product 
And user add "7" quantity of product
And user click add to cart button
And user click cart icon
Then user should see the product on cart page
When user click clear shopping cart button
Then user should see empty shopping cart