import FlowersImpression from 'components/03-organisms/flowers-impression/flowers-impression';
import FlowersIntro from 'components/03-organisms/flowers-intro/flowers-intro';
import FlowersServices from 'components/03-organisms/flowers-services/flowers-services';
import FlowersTeaserHouseCreations from 'components/03-organisms/flowers-teaser-house-creations/flowers-teaser-house-creations';

const Page = () => {

	return (
		<>
			<FlowersIntro />
			<FlowersImpression />
			<FlowersTeaserHouseCreations />
			<FlowersServices />
		</>
	);

};

export default Page;
