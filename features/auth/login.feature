@regression @login
Feature: Login

  As a user
  I want to login with valid credentials


  Background:
    Given I am on the login page

@negativelogin @negative
  Scenario: login without username and password
    When User login without username and password
    Then User click button login
    Then User should see an username error message on login page
    Then User should see an password error message on login page

@negativelogin @negative
  Scenario: Failed login with invalid username
    When User login with invalid username only "fad"
    Then User click button login
    Then User should see an password error message on login page

@negativelogin @negative
  Scenario: Failed login with only password
    When User login with invalid password only "admin"
    Then User click button login
    Then User should see an username error message on login page


@negativelogin @negative
 Scenario: Failed login with valid username and invalid password
    When User login with valid username "Admin" and invalid password "Pas"
    Then User click button login
    Then User should see an validation credentials message on login page

@positivelogin @positive @smoke
 Scenario: Login success with valid credentials
    When User login with valid username "Admin" and valid password "admin123"
    Then User click button login
    Then User should see dashboard on dashboard page

  


