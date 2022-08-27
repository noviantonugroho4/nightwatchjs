#LOGIN
@login
Feature: login

@TC_01_001
Scenario: valid email and passwords
Given user visit shop demoqa page
When user sign with username "mawar@gmail.com" & password "nurmawar16"
Then user direct to my account page

@TC_01_002
Scenario: user on my account page  
Given user visit my account page
When user click picture "shop.Tools"
Then user direct to dashboard shop page