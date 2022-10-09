Feature: To test the reset password page
    
    Background:
        Given user access the application
        When user navigates to reset password page

    Scenario: To verify whether the system displays "This field is required." below the E-mail field.
        When user clicks on send email button
        Then system should display the error message
            |message                |
            |This field is required.|
    
    Scenario: To verify whether the system navigate to "Login" page
        When user clicks on the Back to Login link
        Then system should navigate to login page
            |url                                        |
            |https://d1g5e94sevp1ds.cloudfront.net/login|
    
    Scenario: To verify whether the system displays a error message as "Email is incorrect. Please enter a valid email address." for invalid format of E-mail
        When user enter invalid format of email address
            |invalidEmailAddress   |
            |test@123                |
        When user clicks on send email button
        Then system should display the error message below E-mail field
            |message                                                |
            |Email is incorrect. Please enter a valid email address.|

    Scenario: To verify whether the system displays a success message "We've just sent you an email to reset your password." after successful E-mail submission
        When user enter valid format of email address
            |validEmailAddress   |
            |test@yopmail.com      |
        When user clicks on send email button
        Then system should display error message in popup
            |message                                             |
            |We've just sent you an email to reset your password.|