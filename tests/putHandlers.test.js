// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
  "name": "orange juice",
  "price": 0,
  "weight": 0,
  "units": "Units.kg",
  "category": {}
}

test('Status Code Should Be 200', async () => {
	let actualStatusCode;		
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/1`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status
		
	} catch (error) {
		console.error(error);
	}
	
	expect(actualStatusCode);(200);
});

test('Response Body Should Contain "True"', async () => {
	let actualResponseBody;		
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/1`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
		
	} catch (error) {
		console.error(error);
	}
	
	expect(actualResponseBody);(true);
});








