#LOGIN
@login
Feature: login

@TC_01_001
Scenario: user login with valid email and password
Given user visit shop demoqa home page
When user login with username "abctest@mailinator.com" & password "inipassword123."
Then user direct to my account page