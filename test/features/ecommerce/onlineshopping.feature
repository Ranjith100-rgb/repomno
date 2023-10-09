@online
Feature: Sign up, sign in and make purchase

    Feature Description

    Scenario Outline: TC_001 Create new user/sign up

    Given I am on the home page
    Then I navigate to signup page
    And Create an account with random username


    Scenario Outline: TC_002 Sign in with newly created user credentail

    Given I am on the Sign in page
    When Login using newly created credentail
    Then I am on my account page select My Address option
    And I am on My Address page select Add a new address option
    And On Your Adress Page, add address
    And Verify the added address page

    Scenario Outline: TC_003 Add product to Online Cart and checkout

        Given I am on the Sign in page
        When Login using newly created credentail
        Then I add below products to Cart
            | category | subcategory    | name                        | model  | quantity |
            | Dresses  | CASUAL DRESSES | Printed Dress               | demo_3 | 2        |
            | Women    | TOPS           | Faded Short Sleeve T-shirts | demo_1 | 3        |

        Then I shall validate shopping cart as below
            | name                        | model        | quantity |
            | Printed Dress               | SKU : demo_3 | 2        |
            | Faded Short Sleeve T-shirts | SKU:demo_1   | 3        |
        Then I shall be able to Buy the product
        And I shall be able to Buy using cheque payment


    