const getMessageQuery = async ({ id }) => {

	// TRY-CATCH BLOCK
	try {

		// CHECK IF ID IS PRIVIDED
		if (!id) throw new Error('no id provided');

		// SEND REQUEST
		const response = await fetch(`http://localhost:1337/api/messages/${ id }`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		});

		// GET DATA FROM REQUEST
		const { data } = await response.json();
		return data;

	} catch (error) {
		return null;
	};

};

module.exports = getMessageQuery;
