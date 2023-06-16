import StartIntro from 'components/03-organisms/start-intro/start-intro';
import StartNews from 'components/03-organisms/start-news/start-news';
import StartHero from 'components/03-organisms/start-hero/start-hero';
import StartFlowersOffer from 'components/03-organisms/start-flowers-offer/start-flowers-offer';
import StartStationeryOffer from 'components/03-organisms/start-stationery-offer/start-stationery-offer';
import Bee from 'components/03-organisms/bee/bee';

const Page = () => {

	return (
		<>
			<StartHero />
			<StartNews />
			<StartIntro />
			<Bee />
			<StartFlowersOffer />
			<StartStationeryOffer />
		</>

	);

};

export default Page;
