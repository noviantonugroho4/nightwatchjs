#ADMIN
@admin
Feature: admin

### Admin Orange Page ###

@TC_03_001
Scenario: Add user
Given user on OrangeHRM dashboard page
When user click Admin button
And user click Add button
And user select user role "Admin" --> dropdown click, select role
And user select status "Enabled" --> dropdown click, select status
And user input employee name "Admin A"
And user input username "AdminA"
And user input password "delapandigit"
And user input confirm password "delapandigit"
And user click Save button
Then show prompt message "Successfully Saved"
