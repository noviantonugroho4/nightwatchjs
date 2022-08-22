@admin
Feature: admin

@TC_02_001
Scenario: Add user
Given user on PIM page
When user click Admin button on home page
And user click Add button
And user select user role "Admin"
And user input employee name "Admin"
And user select status "Enabled"
# And user input username "longbootcamp"
# And user input password "delapandigit"
# And user input confirm password "delapandigit"
# And user click Save button
# Then user should see notification "Successfully Saved"