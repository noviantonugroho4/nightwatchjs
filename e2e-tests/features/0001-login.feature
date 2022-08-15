#LOGIN
@login
Feature: login

@TC_01_001
Scenario: Login with valid email and password 
Given user visit Xswift page
When user input valid email "nugi@gmail.com"
And user input valid password "12345"
And user click login button
Then user successfully login and direct to homepage

@TC_01_002
Scenario: Login with valid email and invalid password 
Given user visit Xswift page
When user input valid email "nugi@gmail.com"
And user input invalid password "invalid12345"
And user click login button
Then show alert "Invalid user email or password"

@TC_01_003
Scenario: Login with invalid email and valid password  
Given user visit Xswift page
When user input invalid email "zakia@gmail.com" 
And user input valid password "12345"
And user click login button
Then show alert "Invalid user email or password"

@TC_01_004
Scenario: Login with invalid email and password 
Given user visit Xswift page
When user input invalid email "zakia@gmail.com"
And user input invalid password "invalid12345"
And user click login button
Then show alert "Invalid user email or password"

@TC_01_005
Scenario: Login with empty email
Given user visit Xswift page
When user input valid password "12345"
And user click login button
Then show alert empty email "Email input cannot be empty"

@TC_01_006
Scenario: Login with empty password
Given user visit Xswift page
When user input valid email "nugi@gmail.com"
And user click login button
Then show alert empty password "Password input cannot be empty"

@TC_01_007
Scenario: Login with empty email and password 
Given user visit Xswift page
When user click login button with empty email and password
Then show alert empty email "Email input cannot be empty"
Then show alert empty password "Password input cannot be empty"