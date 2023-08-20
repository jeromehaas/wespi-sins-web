// IMPORTS
import { Fragment } from 'react';
import FlowersImpression from 'components/03-organisms/flowers-impression/flowers-impression';
import FlowersIntro from 'components/03-organisms/flowers-intro/flowers-intro';
import FlowersServices from 'components/03-organisms/flowers-services/flowers-services';
import FlowersTeaserHouseCreations from 'components/03-organisms/flowers-teaser-house-creations/flowers-teaser-house-creations';
import FlowersTeaserSeasonal from 'components/03-organisms/flowers-teaser-seasonal/flowers-teaser-seasonal';
import FlowersTeaserWeddings from 'components/03-organisms/flowers-teaser-weddings/flowers-teaser-weddings';
import FlowersTeaserMourning from 'components/03-organisms/flowers-teaser-mourning/flowers-teaser-mourning';

// META DESCRIPTION
const metadata = {
	title: 'Blueme | Papeterie- und Bluemeparadies Wespi',
	description: 'Bei uns finden Sie Geschenke der Natur; saisonale Blumen, originelle Hauskreationen, Blumiges zu Hochzeiten oder Trauerfeiern.',
};

// FETCH FLOWERS
const fetchFlowers = async () => {
	const res = await fetch(`${ process.env.NEXT_PUBLIC_CMS_BASE_URL }/api/flowers?populate=deep`);
	const data = await res.json();
	return data;
};

// PAGE
const Page = async () => {

	// FETCH FLOWERS
	const flowers = await fetchFlowers();

	// RENDER
	return (
		<Fragment>
			<FlowersIntro />
			<FlowersImpression />
			<FlowersTeaserSeasonal data={ { flowers: flowers } } />
			<FlowersTeaserHouseCreations data={ { flowers: flowers } } />
			<FlowersTeaserWeddings data={ { flowers: flowers } } />
			<FlowersTeaserMourning data={ { flowers: flowers } } />
			<FlowersServices />
		</Fragment>
	);

};

// EXPORT
export { metadata };
export default Page;
