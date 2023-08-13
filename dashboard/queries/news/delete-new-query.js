const deleteMessageQuery = async ({ id }) => {

	// SEND REQUEST
	const response = await fetch(`http://localhost:1337/api/news/${ id }`, {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
	});

	// GET DATA FROM REQUEST
	const { data } = await response.json();
	return data;

};

module.exports = deleteMessageQuery;
