
@debug
Feature: Add Second-Highest Priced Product to Cart

  Scenario: Add second-highest priced product to the cart

    Given I am on the product listing page
    When I sort the products by price in descending order
    And I add the second-highest priced product to the cart
    Then I should see the second-highest priced product in the cart

        Examples:
            | TestID     | NumberOfProducts |
            | INTV_TC001 |       6         |