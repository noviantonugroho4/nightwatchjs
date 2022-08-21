#LOGIN
@login
Feature: login

### Login Orange Page ###

@TC_01_002
Scenario: Valid username and invalid password
Given user visit OrangeHRM page
When user sign in with valid username "Admin" & invalid password "zakia123"
Then show alert "Invalid credentials"

@TC_01_003
Scenario: Invalid username and valid password
Given user visit OrangeHRM page
When user sign in with invalid username "Zakia" & valid password "admin123"
Then show alert "Invalid credentials"

@TC_01_004
Scenario: Invalid username and password
Given user visit OrangeHRM page
When user sign in with invalid username "Zakia" & password "zakia123"
Then show alert "Invalid credentials"

@TC_01_005
Scenario: Empty username and password
Given user visit OrangeHRM page
When user click login button with empty username & password
Then show alert empty username & password "Required"

@TC_01_006
Scenario: Valid username and empty password
Given user visit OrangeHRM page
When user sign in with valid username "Admin" & empty password ""
Then show alert empty password "Required"

@TC_01_007
Scenario: Empty username and valid password
Given user visit OrangeHRM page
When user sign in with empty username "" & valid password "admin123"
Then show alert empty username "Required"

@TC_01_008
Scenario: Invalid username and empty password
Given user visit OrangeHRM page
When user sign in with invalid username "Zakia" & empty password ""
Then show alert empty password "Required"

@TC_01_009
Scenario: Empty username and invalid password
Given user visit OrangeHRM page
When user sign in with empty username "" & invalid password "zakia123"
Then show alert empty username "Required"

@TC_01_001
Scenario: Valid username and password
Given user visit OrangeHRM page
When user sign in with valid username "Admin" & password "admin123"
Then user direct to homepage "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"

### Login Xswift Page ###

# @TC_01_001
# Scenario: Login with valid email and password 
# Given user visit Xswift page
# When user input valid email "nugi@gmail.com"
# And user input valid password "12345"
# And user click login button
# Then user successfully login and direct to homepage

# @TC_01_002
# Scenario: Login with valid email and invalid password 
# Given user visit Xswift page
# When user input valid email "nugi@gmail.com"
# And user input invalid password "invalid12345"
# And user click login button
# Then show alert "Invalid user email or password"

# @TC_01_003
# Scenario: Login with invalid email and valid password  
# Given user visit Xswift page
# When user input invalid email "zakia@gmail.com" 
# And user input valid password "12345"
# And user click login button
# Then show alert "Invalid user email or password"

# @TC_01_004
# Scenario: Login with invalid email and password 
# Given user visit Xswift page
# When user input invalid email "zakia@gmail.com"
# And user input invalid password "invalid12345"
# And user click login button
# Then show alert "Invalid user email or password"

# @TC_01_005
# Scenario: Login with empty email
# Given user visit Xswift page
# When user input valid password "12345"
# And user click login button
# Then show alert empty email "Email input cannot be empty"

# @TC_01_006
# Scenario: Login with empty password
# Given user visit Xswift page
# When user input valid email "nugi@gmail.com"
# And user click login button
# Then show alert empty password "Password input cannot be empty"

# @TC_01_007
# Scenario: Login with empty email and password 
# Given user visit Xswift page
# When user click login button with empty email and password
# Then show alert empty email "Email input cannot be empty"
# Then show alert empty password "Password input cannot be empty"