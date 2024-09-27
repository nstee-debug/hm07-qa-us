// eslint-disable-next-line no-undef
const config = require('../config');

test('Status Code Should Be 200', async () => {
	let actualResponseCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualResponseCode = response.status; 
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseCode);(200);
});

test('Response Body Should Contain "Everything You Need"', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualResponseBody = await response.json(); 
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody);("Everything You Need");
});
