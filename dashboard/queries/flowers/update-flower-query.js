const updateFlowerQuery = async ({ id, input }) => {

	try {

		// SEND REQUEST
		const response = await fetch(`http://localhost:1337/api/flowers/${ id }`, {
			method: 'PUT',
			body: input,
		});

		// GET DATA FROM REQUEST
		const { data } = await response.json();
		return data;

		// HANDLE ERRORS
	} catch (error) {
		console.log(error);
	};

};

module.exports = updateFlowerQuery;
