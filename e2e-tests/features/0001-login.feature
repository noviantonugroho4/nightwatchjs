#LOGIN
@login
Feature: login

@TC_01_001
Scenario: valid email and password 
Given user visit orangeHRM page
When user sign with username "admin" & password "admin123"
Then user direct to home page "https://opensource-demo.orangehrmlive.com/index.php/dashboard"