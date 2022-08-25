#LOGIN
@login
Feature: login

@TC_01_001
Scenario: valid email and passwords 
Given user visit shop demoqa page
When user sign with username "asdasd@yopmail.com" & password "noviantonugroho"
Then user direct to my account page