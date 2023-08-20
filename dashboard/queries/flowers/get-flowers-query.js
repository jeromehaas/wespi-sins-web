const getFlowersQuery = async () => {

	// SEND REQUEST
	const response = await fetch('http://localhost:1337/api/flowers?populate=deep', {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});

	// GET DATA FROM REQUEST
	const { data } = await response.json();
	return data;

};

module.exports = getFlowersQuery;
