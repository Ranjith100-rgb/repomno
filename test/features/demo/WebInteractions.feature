Feature: Web Interactions

   @smoke
    Scenario Outline: Demo web interactions

    Given A web page is opened
    # When Perform web interactions

    Examples:
        | TestID | SearchItem | ExpectedResult |
        | WEB-TC001| wdio  | https://webdriver.io/  |