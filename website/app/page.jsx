import StartIntro from 'components/03-organisms/start-intro/start-intro';
import StartNews from 'components/03-organisms/start-news/start-news';
import StartHero from 'components/03-organisms/start-hero/start-hero';
import StartFlowersOffer from 'components/03-organisms/start-flowers-offer/start-flowers-offer';
import StartStationeryOffer from 'components/03-organisms/start-stationery-offer/start-stationery-offer';
import StartBeeAction from 'components/03-organisms/start-bee-action/start-bee-action';

const Page = () => {

	return (
		<>
			<StartHero />
			<StartNews />
			<StartIntro />
			<StartBeeAction />
			<StartFlowersOffer />
			<StartStationeryOffer />
		</>

	);

};

export default Page;
