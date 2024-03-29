// FETCH FLOWERS
const fetchFlowers = async () => {
	const res = await fetch(`${ process.env.NEXT_PUBLIC_CMS_BASE_URL }/api/flowers?populate=deep&sort=id`, {
		next: { revalidate: 300 },
		method: 'GET',
	});
	const { data } = await res.json();
	return data;
};

// EXPORTS
export default fetchFlowers;
