#LOGIN
@login
Feature: login

@C2797
Scenario: Empty email And Password 
Given user on Xswift login page
When user click button login
Then show alert "Email input cannot be empty" and "Password input cannot be empty"

@C2798
Scenario: Invalid write email And empty Password 
Given user on Xswift login page
When user click button login
Then show alert "Email must include `@` in the email address" and "Password input cannot be empty"

@C2799
Scenario: empty email And invalid Password 
Given user on Xswift login page
When user click button login
Then show alert "Email must include `@` in the email address" and "Password input cannot be empty"

@C27100
Scenario: valid email And invalid Password 
Given user on Xswift login page
When user click button login
Then show alert "Invalid user email or password"