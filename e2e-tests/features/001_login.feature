#LOGIN
@login
Feature: login

@TC_01_001
Scenario Outline: valid email and passwords (admin & finance)
Given user visit shop demoqa page
When user sign with <username> & <password>
Then user direct to my account page and login as <users> and then logout
Examples:
    | username              |    password            |     users          | 
    | asdasd@yopmail.com    |   noviantonugroho      |    asdasdasd       | 
    | asdasd@yopmail.com    |   nugi                 |    nugi            | 



# @TC_01_002
# Scenario: valid email and passwords asdaasdasd
# Given user visit shop demoqa page
# When user sign with username & password
#     | username              |    password            |
#     | asdasd@yopmail.com    |   novinatonugroho      |

# Then user direct to my account page

# @TC_01_003
# Scenario: valid email and passwords asdaasdasd
# Given user visit shop demoqa page
# When user sign with username & password
#     | username              |    password            |
#     | asdasd@yopmail.com    |   novinatonugroho      |
# Then user direct to my account page