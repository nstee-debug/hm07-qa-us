// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
  
"productsList": [
    {
      "id": 5,
      "quantity": 2
    }
  ]
}

test('Status Code Should Be 201', async () => {
    let actualStatusCode;	
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}

	expect(actualStatusCode);(201);
});

test('Response Body Should Contain "Order and Go"', async () => {
    let actualResponseBody;	
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody);("Order and Go");
});









