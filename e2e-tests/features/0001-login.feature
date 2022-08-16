#LOGIN
@login
Feature: login

@TC_01_001
Scenario: empty email and password 
Given user on Xswift login page
When user click button login
Then show alert "Email input cannot be empty" and "Password input cannot be empty"

@TC_01_002
Scenario: invalid email and password 
Given user on Xswift login page
#When user sign in with invalid email & password
When user input invalid email "zakia@ria.com"
And user input password
And user click button login
Then show alert "Invalid user email or password"

@TC_01_003
Scenario: empty email
Given user on Xswift login page
#When user sign in with empty email
When user input valid password "123"
And user click button login
Then show alert empty email "Email input cannot be empty"

@TC_01_004
Scenario: empty password
Given user on Xswift login page
#When user sign in with empty password
When user input valid email "ria@gmail.com"
And user click button login
Then show alert empty password "Password input cannot be empty"

@TC_01_005
Scenario: invalid email And empty password 
Given user on Xswift login page
When user click button login
Then show alert "Email must include `@` in the email address" and "Password input cannot be empty"

@TC_01_006
Scenario: empty email And invalid password 
Given user on Xswift login page
When user click button login
Then show alert "Email must include `@` in the email address" and "Password input cannot be empty"

@TC_01_007
Scenario: valid email and invalid password 
Given user on Xswift login page
When user click button login
Then show alert "Invalid user email or password"


