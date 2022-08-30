#LOGIN
@login
Feature: login

@TC_01_001
Scenario: valid username and password
Given user visit shop demoqa page
When user sign in with username "zakiazakia" & password "PDzakia123"
Then user direct to my account page