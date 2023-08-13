const createNewQuery = async ({ input }) => {

	try {

		// SEND REQUEST
		const response = await fetch('http://localhost:1337/api/news/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				data: input,
			}),
		});

		// GET DATA FROM REQUEST
		const { data } = await response.json();
		return data;

	} catch (error) {
		console.log(error);
	};

};

module.exports = createNewQuery;
