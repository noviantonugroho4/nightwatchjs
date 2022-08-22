#LOGIN
@login
Feature: login

@TC_002_001
Scenario: valid credential
Given user on OrangeHRM login page
When user input valid username "Admin"
And user input val password "admin123"
And user click button login
Then user direct on homepage

@TC_002_002
Scenario: invalid username & password
Given user on OrangeHRM login page
When user input invalid username "ria"
And user input invalid password "123"
And user click button login
Then show alert invalid "Invalid credentials"

@TC_002_003
Scenario: empty username
Given user on OrangeHRM login page
When user input val password "admin123"
And user click button login
Then show alert empty username "Required"

@TC_002_004
Scenario: empty password
Given user on OrangeHRM login page
When user input valid username "Admin"
And user click button login
Then show alert emp password "Required"

@TC_002_005
Scenario: invalid username & empty password
Given user on OrangeHRM login page
When user input invalid username "ria"
And user click button login
Then show alert emp password "Required"

@TC_002_006
Scenario: empty username & invalid password
Given user on OrangeHRM login page
When user input invalid password "123"
And user click button login
Then show alert empty username "Required"

@TC_002_007
Scenario: valid username & invalid password
Given user on OrangeHRM login page
When user input valid username "Admin"
And user input invalid password "123"
And user click button login
Then show alert invalid "Invalid credentials"

@TC_002_008
Scenario: invalid username & valid password
Given user on OrangeHRM login page
When user input invalid username "ria"
And user input val password "admin123"
And user click button login
Then show alert invalid "Invalid credentials"
