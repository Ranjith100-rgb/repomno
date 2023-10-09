Feature: Web Interaction

    # @smoke
    Scenario Outline: Demo Web Interaction

    Given Google page is opened
    When Perform web Interaction

   Examples:
       | TestID | Header 2 | Header 3 |
       | WEB-TC001  | Value 2  | Value 3  |