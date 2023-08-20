const getFlowerQuery = async ({ id }) => {

	try {

		if (!id) throw new Error('no id provided');

		// SEND REQUEST
		const response = await fetch(`http://localhost:1337/api/flowers/${ id }?populate=deep`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		});

		// GET DATA FROM REQUEST
		const { data } = await response.json();
		return data;

	// HANDLE ERRORS
	} catch (error) {
		return null;
	};

};

module.exports = getFlowerQuery;
