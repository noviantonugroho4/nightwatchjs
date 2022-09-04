#LOGIN
@login
Feature: login

@TC_01_001
Scenario: valid email and passwords
Given user visit shop demoqa page
When user sign with username "hiburansaja005@gmail.com" & password "sitinurkhomaria"
Then user direct to my account page
