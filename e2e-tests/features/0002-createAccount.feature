#LOGIN
@create_account
Feature: create account

@TC_02_001
Scenario: create account with account registered
Given user visit automation practice home page
When user create account with account registered
Then user cannot create account
