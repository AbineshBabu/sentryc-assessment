Feature: To test the login page
    
    Background:
        Given user access the application

    Scenario: To verify whether the system displays "This field is required." below the E-mail and password field.
        When user clicks on the login button
        Then system should display the error message
            |message|
            |This field is required.|

    Scenario: To verify whether the system displays "This field is required." below the Password field alone
        When user enter valid email address
            |email_address|
            |test@yopmail.com|
        When user clicks on the login button
        Then system should display the error message below password field
            |message|
            |This field is required.|

    Scenario: To verify whether the system displays "This field is required." below the E-mail field alone
        When user enter valid password
            |password|
            |test@123|
        When user clicks on the login button
        Then system should display the error message below E-mail field
            |message|
            |This field is required.|

    Scenario: To verify whether the system displays "Wrong email or password." for invalid E-mail and Password
        When user enter valid email address and password
            |email_address   |password|
            |test@yopmail.com|test@123|
        When user clicks on the login button
        Then system should display error message in popup
            |message|
            |Wrong email or password.|

    Scenario: To verify whether the system displays a error message as "Email is incorrect. Please enter a valid email address." for invalid format of E-mail 
        When user enter invalid format of email address
            |invalid_email_address   |
            |test@123|
        When user clicks on the login button
        Then system should display the error message below E-mail field
            |message|
            |Email is incorrect. Please enter a valid email address.|

    Scenario: To verify whether the system navigate to "Reset password" page
        When user clicks on the forgot your password link
        Then system should navigate to reset password page