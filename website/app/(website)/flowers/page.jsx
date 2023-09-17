// IMPORTS
import { Fragment } from 'react';
import FlowersImpression from 'components/03-organisms/flowers-impression/flowers-impression';
import FlowersIntro from 'components/03-organisms/flowers-intro/flowers-intro';
import FlowersServices from 'components/03-organisms/flowers-services/flowers-services';
import FlowersTeaserHouseCreations from 'components/03-organisms/flowers-teaser-house-creations/flowers-teaser-house-creations';
import FlowersTeaserSeasonal from 'components/03-organisms/flowers-teaser-seasonal/flowers-teaser-seasonal';
import FlowersTeaserWeddings from 'components/03-organisms/flowers-teaser-weddings/flowers-teaser-weddings';
import FlowersTeaserMourning from 'components/03-organisms/flowers-teaser-mourning/flowers-teaser-mourning';
import fetchFlowers from 'services/fetch-flowers';

// META DESCRIPTION
const metadata = {
	title: 'Blumen | Papeterie- und Bluemeparadies Wespi',
	description: 'Bei uns finden Sie Geschenke der Natur; saisonale Blumen, originelle Hauskreationen, Blumiges zu Hochzeiten oder Trauerfeiern.',
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
