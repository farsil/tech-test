/**
 * @async
 * @callback EligibilityService
 * @param customerAccountNumber {string}
 * @returns {Promise<string>}
 *
 * For simplicity's sake I am not defining custom exception types, but I am using strings. This is the reason this
 * function does not return a Promise<string | Error>.
 */

/**
 * @typedef RewardsServiceReturn
 * @property {string[]} [data]
 * @property {number} [error]
 *
 * If data is set, there is success, otherwise, the function failed, and error is set.
 */

const { ERROR_CODES, REWARDS_MAP } = require('./constants');

/**
 * @async
 * @param customerAccountNumber {string}
 * @param portfolio {string[]}
 * @param eligibilityService {EligibilityService}
 * @returns {RewardsServiceReturn}
 */
async function redeemService({ customerAccountNumber, portfolio, eligibilityService }) {
	try {
		if ((await eligibilityService(customerAccountNumber)) === 'CUSTOMER_ELIGIBLE') {
			return {
				data: portfolio.map((channel) => REWARDS_MAP.get(channel)).filter((reward) => reward != null),
			};
		}
		// Technical failure should not report an error, so I am aggregating the two cases
		// response is CUSTOMER_INELIGIBLE and response is invalid
		return {
			data: [],
		};
	} catch (e) {
		if (e === 'INVALID_ACCOUNT_NUMBER') {
			return {
				// Not sending a message so that the client can localize the error
				error: ERROR_CODES.INVALID_ACCOUNT_NUMBER,
			};
		}
		// Technical failure should not report an error according to README.md
		return {
			data: [],
		};
	}
}

module.exports = redeemService;
