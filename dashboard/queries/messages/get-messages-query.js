const getMessagesQuery = async () => {

	// SEND REQUEST
	const response = await fetch('http://localhost:1337/api/messages', {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});

	// GET DATA FROM REQUEST
	const { data } = await response.json();
	return data;

};

module.exports = getMessagesQuery;
