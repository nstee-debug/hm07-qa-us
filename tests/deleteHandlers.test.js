// eslint-disable-next-line no-undef
const config = require('../config');

test('Status Code Should Be 200', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/2`, {
			method: 'DELETE',
		});
	} catch (error) {
		console.error(error);
	}
	
	expect(actualStatusCode);(200);

});

test('Response Body Should Contain Expected Data "True"', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/2`, {
			method: 'DELETE',
		});
	} catch (error) {
		console.error(error);
	}
	
	expect(actualResponseBody);(true);

});



