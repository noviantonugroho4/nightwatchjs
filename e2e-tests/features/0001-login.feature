#LOGIN
@login
Feature: login

@TC_01_001
Scenario: Valid Email And Password 
Given user visit page
When user input valid email and password
And user click login button
Then Show massage "Login Succes"

@TC_01_002
Scenario: Invalid Email And Password 
Given user visit page Xswift
When user input invalid email and password
And user click login button
Then Show error message "Invalid email or password"

@TC_01_003
Scenario: Empty field email and valid password 
Given user visit page Xswift
When user input invalid email and valid password
And user click login button
Then Show error message "user login invalid email or password"

@TC_01_004
Scenario: Valid email and empty field password 
Given user visit page Xswift
When user input valid email and invalid password
And user click login button
Then Show error message "user login invalid email or password"

@TC_01_005
Scenario: Empty field email and empty field password 
Given user visit page Xswift
When user click login button
Then Show error message " Email and Password cannot be empty"