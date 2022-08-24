#LOGIN
@login
Feature: login

@TC_01_001
Scenario: Invalid Email And Password 
Given user visit page Xswift
When user input email "nurmawar1603@gmail.com"
And user input password "123456"
And user click login button
Then Show error message invalid email "Invalid user email or password"


@TC_01_002
Scenario: Empty field email and valid password 
Given user visit page Xswift
When user input empty email
And user input password "123456"
And user click login button
Then Show error message empty email "Email input cannot be empty"

@TC_01_003
Scenario: Field email cannot include '@' and valid password 
Given user visit page Xswift
When user input invalid email "aaa"
And user input password "123456"
And user click login button
Then Show error message "Email must include `@` in the email address"

@TC_01_004
Scenario: Valid email and empty field password 
Given user visit page Xswift
When user input email name "nurmawar1603@gmail.com"
And user input password empty ""
And user click login button
Then Show error message empty password "Password input cannot be empty"

@TC_01_005
Scenario: Empty field email and empty field password 
Given user visit page Xswift
When user click login button
Then Show error message "Email and Password cannot be empty"

@TC_01_006
Scenario: Valid Email And Password 
Given user visit page Xswift
When user input valid email and password
And user click login button
Then Show massage "Login Succes"
