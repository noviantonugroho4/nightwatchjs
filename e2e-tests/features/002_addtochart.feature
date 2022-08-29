#Addtochart
@Addtochart
Feature: Addtochart

#Background: Login

@TC_02_001
Scenario:user can add 5 dress to shopping cart
Given user on my account shop page
When user open the detail dress 
And user add "5" dress to shopping cart
And user open my shopping cart
Then user should see the dress in my shopping cart