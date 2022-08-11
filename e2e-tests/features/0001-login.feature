#LOGIN
@login
Feature: login

@TC_01_001
Scenario: Empty email And Password 
Given user on Xswift login page
When user click button login
Then show alert "Email input cannot be empty" and "Password input cannot be empty"

@TC_01_002
Scenario: Invalid write email And empty Password 
Given user on Xswift login page
When user click button login
Then show alert "Email must include `@` in the email address" and "Password input cannot be empty"

@TC_01_003
Scenario: empty email And invalid Password 
Given user on Xswift login page
When user click button login
Then show alert "Email must include `@` in the email address" and "Password input cannot be empty"

@TC_01_004
Scenario: valid email And invalid Password 
Given user on Xswift login page
When user click button login
Then show alert "Invalid user email or password"


