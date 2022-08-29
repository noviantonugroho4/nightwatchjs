#LOGIN
@login
Feature: login

@TC_01_001
Scenario: valid email and passwords
Given user visit shop demoqa page
When user sign with username "mawar@gmail.com" & password "nurmawar16"
Then user direct to my account page