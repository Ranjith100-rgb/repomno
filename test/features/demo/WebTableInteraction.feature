Feature: Web Interaction

    
    Scenario Outline: Demo Web Interaction

    Given Internet herokuApp opened
    Then Perform table Interaction

   Examples:
       | TestID | Header 2 | Header 3 |
       | WEB-TC001  | Value 2  | Value 3  |