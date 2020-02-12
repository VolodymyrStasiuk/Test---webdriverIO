@Test-21 @snoke
Feature: Home page

  Background:
    Given the home page is shown
  Scenario: Checking documents of the constructor
    Then correct page title is shown

    When Opening new appartment category
    Then correct page title is shown for the cosntructor page

    When Sending keys to the search field
    When Submitting search form
    When Opening documents tab
    When Expanding land yard documents section
    Then correct document is shown