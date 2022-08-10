#LOGIN
@login
Feature: login

@C2797
Scenario: Empty Field Email And Password 
Given I visit Xswift page
When I Click Button Login
Then Show Alert Email and Password Empty not Found


@TC_01_001
Scenario: Empty Field Email And Valid Password
Given user visit Xswift page
When user input valid Password
Then show alert email "Email input cannot be empty"

@TC_01_002
Scenario: Valid Email And Empty Field Password
Given user visit Xswift page
When user input valid email
Then show alert email "Password input cannot be empty"

