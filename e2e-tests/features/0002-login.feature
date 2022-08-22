#LOGIN
@login
Feature: login

# @TC_01_002
# Scenario: user create account with account registed
# Given user visit automationpractice page
# When user create new account
# Then user cannot regist new account

@TC_01_003
Scenario: valid email and password 
Given user visit orangeHRM page
When user sign with username "Admin" & password "admin123"
Then user direct to home page "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"