const redeemService = require('./redeemService');
const { ERROR_CODES } = require('./constants');

describe('redeemService', () => {
	it('should return relevant rewards if customer is eligible', async () => {
		// arrange
		const eligibleAccountNumber = 'd7cbbd83-bfba-48e4-898a-4bedf73e279b';
		const customerAccountNumber = eligibleAccountNumber;
		const portfolio = ['NEWS', 'MUSIC'];
		const eligibilityService = jest
			.fn()
			.mockImplementation((can) =>
				Promise.resolve(can === eligibleAccountNumber ? 'CUSTOMER_ELIGIBLE' : 'CUSTOMER_INELIGIBLE'),
			);

		// act
		const response = await redeemService({ customerAccountNumber, portfolio, eligibilityService });

		// assert
		expect(eligibilityService).toHaveBeenCalledWith(customerAccountNumber);
		expect(response.data).toEqual(['KARAOKE_PRO_MICROPHONE']);
		expect(response.error).toBeUndefined();
	});

	it('should not return any rewards if customer is not eligible', async () => {
		// arrange
		const eligibleAccountNumber = 'd7cbbd83-bfba-48e4-898a-4bedf73e279b';
		const customerAccountNumber = '1be79187-abf2-4c75-82e4-fbcce81e198e';
		const portfolio = ['NEWS', 'MUSIC'];
		const eligibilityService = jest
			.fn()
			.mockImplementation((can) =>
				Promise.resolve(can === eligibleAccountNumber ? 'CUSTOMER_ELIGIBLE' : 'CUSTOMER_INELIGIBLE'),
			);

		// act
		const response = await redeemService({ customerAccountNumber, portfolio, eligibilityService });

		// assert
		expect(eligibilityService).toHaveBeenCalledWith(customerAccountNumber);
		expect(response.data).toEqual([]);
		expect(response.error).toBeUndefined();
	});

	it('should not return any rewards if a technical failure occurs', async () => {
		// arrange
		const customerAccountNumber = 'd7cbbd83-bfba-48e4-898a-4bedf73e279b';
		const portfolio = ['NEWS', 'MUSIC'];
		const error = 'TECHNICAL_FAILURE';
		const eligibilityService = jest.fn().mockRejectedValue(error);

		// act
		const response = await redeemService({ customerAccountNumber, portfolio, eligibilityService });

		// assert
		expect(eligibilityService).toHaveBeenCalledWith(customerAccountNumber);
		await expect(eligibilityService).rejects.toBeDefined();
		expect(response.data).toEqual([]);
		expect(response.error).toBeUndefined();
	});

	it('should not return any rewards and notify the user if their account number is invalid', async () => {
		// arrange
		const customerAccountNumber = 'invalidAccountNumber';
		const portfolio = ['NEWS', 'MUSIC'];
		const error = 'INVALID_ACCOUNT_NUMBER';
		const eligibilityService = jest.fn().mockRejectedValue(error);

		// act
		const response = await redeemService({ customerAccountNumber, portfolio, eligibilityService });

		// assert
		expect(eligibilityService).toHaveBeenCalledWith(customerAccountNumber);
		await expect(eligibilityService).rejects.toEqual(error);
		expect(response.data).toBeUndefined();
		expect(response.error).toEqual(ERROR_CODES.INVALID_ACCOUNT_NUMBER);
	});
});
