# Sky Javascript Unattended Test

## Scenario
A ground-breaking broadcaster has decided to reward its most loyal customers. A software engineering team, developing the customer account website, is working on the story below.

### User Story

**Display customer's available rewards**

As a __customer__, if I am eligible for __rewards__, then I want to see which rewards are available based on my __channel subscriptions__.

The Account Management team has partnered with the Customer Status team that provides a service that checks the customer eligibility based on loyalty and billing status.

## Instructions

You are required to provide an implementation of a RewardsService in javascript as a single function, e.g.:

```javascript
function rewardsService({ customerAccountNumber, portfolio, eligibilityService }) {
    // ...amazing code

    return {
        data: [],
    }
}
```

Please structure your app as follows

- app
    - redeemService.js
    - constants.js (for simplicity you may also put any stubs or object mappings in here)
    - redeemService-test.js
    - package.json
    - .node-version


The service accepts as input; a customer account number, a portfolio containing channels subscriptions and the eligibilityService as a function to be called. If the customer is eligible for rewards the RewardsService should return a list of all the rewards available according to the subscriptions on the portfolio.

The code should be evaluated via tests (e.g `npm run tests`).
Please do not build a runnable server (i.e a Koa or Express app)

## Additional Information

The following table describes the codes for the channel subscriptions and the associated rewards.

| **Channel** | **Reward**                          |
|-------------|-------------------------------------|
| SPORTS      | CHAMPIONS_LEAGUE_FINAL_TICKET       |
| KIDS        | N/A                                 |
| MUSIC       | KARAOKE_PRO_MICROPHONE              |
| NEWS        | N/A                                 |
| MOVIES      | PIRATES_OF_THE_CARIBBEAN_COLLECTION |

The Customer Status team is currently developing the EligibilityService which accepts the account number as an input.
You are required to provide a mock or stub of the EligibilityService interface such that in your tests you can stub the different responses given back from this service.

| EligibilityService output        | RewardsService result                                                      |
|----------------------------------|----------------------------------------------------------------------------|
| CUSTOMER_ELIGIBLE                | Return relevant rewards according to the customer's portfolio              |
| CUSTOMER_INELIGIBLE              | Return no rewards                                                          |
| Technical failure exception      | Return no rewards                                                          |
| Invalid account number exception | Return no rewards and notify the client that the account number is invalid |

## What we look at

* We're interested in your comfort using Javascript here.
* Please do not spend more than 90 minutes on this part of the assessment.
* Please do not use any additional packages, with the exception of any dev dependencies to aid you such as linting or testing frameworks.
* Please do not use Babel or typescript, however you are welcome to use whichever version of node you would like (but please include a `.node-version` file so we know which version to test against)
* Please include a README.md with any assumptions and design decisions you have made.
