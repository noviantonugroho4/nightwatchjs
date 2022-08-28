#LOGIN
@login_orangeHRM
Feature: login orange HRM

@TC_orangeHRM_01_001
Scenario: Valid credential
Given user visit orangeHRM
When user sign with valid username "Admin" and valid password "admin123"
Then user direct to home page "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"

# @TC_orangeHRM_01_002
# Scenario: Invalid credential
# Given user visit orangeHRM
# When user sign with invalid username "New Admin" and invalid password "test"
# Then user failed login with error message "Invalid credentials"

# @TC_orangeHRM_01_003
# Scenario: Invalid username
# Given user visit orangeHRM
# When user sign with invalid username "New Admin" and valid password "admin123"
# Then user failed login with error message "Invalid credentials"

# @TC_orangeHRM_01_004
# Scenario: Invalid password
# Given user visit orangeHRM
# When user sign with valid username "Admin" and invalid password "test"
# Then user failed login with error message "Invalid credentials"

# @TC_orangeHRM_01_005
# Scenario: Empty username and valid password
# Given user visit orangeHRM
# When user sign with empty username and valid password "admin123"
# Then user failed login with error message username "Required"

# @TC_orangeHRM_01_006
# Scenario: Valid username and empty password
# Given user visit orangeHRM
# When user sign with valid username "Admin" and empty password
# Then user failed login with error message password "Required"

# @TC_orangeHRM_01_007
# Scenario: Empty credential
# Given user visit orangeHRM
# When user sign with empty credential
# Then user failed login with error message username and password "required"

# @TC_orangeHRM_01_008
# Scenario: Empty username and invalid password
# Given user visit orangeHRM
# When user sign with empty username and invalid password "test"
# Then user failed login with error message "Required"

# @TC_orangeHRM_01_009
# Scenario: Invalid username and empty password
# Given user visit orangeHRM
# When user sign with invalid username "New Admin" and empty password
# Then user failed login with error message "Required"