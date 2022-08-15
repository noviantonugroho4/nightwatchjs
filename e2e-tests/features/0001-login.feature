#LOGIN
@login
Feature: login


@TC_01_004
Scenario: Empty Field Email And Field Password
Given user visit Xswift page
When user click login button
Then show alert email "Email input cannot be empty" and alert password "Password input cannot be empty"

#=========HOMEWORK=========
@TC_01_001
Scenario: Invalid Email And Password
Given user visit Xswift page
When user input email "cnisa@test.com"
And user input password
And user click login button
Then show pop up error messagee "Invalid user email or password"

@TC_01_005
Scenario: Empty Email
Given user visit Xswift page
When user input password
And user click login button
Then show alert email "Email input cannot be empty"

@TC_01_006
Scenario: Empty Password
Given user visit Xswift page
When user input email "cnisa@test.com"
And user click login button
Then show alert password "Password input cannot be empty"

#=========THE END=========

@TC_01_002
Scenario: Invalid Email And Valid Password
Given user visit Xswift page
When user input invalid email and valid password
And user click login button
Then show error message "Invalid user email or password"

@TC_01_003
Scenario: Valid Email And Invalid Password
Given user visit Xswift page
When user input valid email and invalid password
And user click login button
Then show error message "Invalid user email or password"

@TC_01_007
Scenario: Empty Field Email And Invalid Password
Given user visit Xswift page
When user input invalid password
And user click login button
Then show alert email "Email input cannot be empty"

@TC_01_008
Scenario: Invalid Email And Empty Field Password
Given user visit Xswift page
When user input invalid email
And user click login button
Then show alert password "Password input cannot be empty"

@TC_01_009
Scenario: Input email not include @ And Valid password
Given user visit Xswift page
When user input email without @ and valid password
And user click login button
Then show alert email "Email must include '@' in the email address"

@TC_01_010
Scenario: Input email not include @ And Invalid password
Given user visit Xswift page
When user input email without @ and invalid password
And user click login button
Then show alert email "Email must include '@' in the email address"