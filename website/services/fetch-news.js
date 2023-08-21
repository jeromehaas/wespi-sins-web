// FETCH NEWS
const fetchNews = async () => {
	const res = await fetch(`${ process.env.NEXT_PUBLIC_CMS_BASE_URL }/api/news?populate=deep`, {
		next: { revalidate: 3600 },
		method: 'GET',
	});
	const data = await res.json();
	return data;
};

// EXPORTS
export default fetchNews;