import StationeryIntro from 'components/03-organisms/stationery-intro/stationery-intro';
import StationeryImpression from 'components/03-organisms/stationery-impression/stationery-impression';
import StationeryServices from 'components/03-organisms/stationery-services/stationery-services';
import Bee from 'components/03-organisms/bee/bee';
import StationeryTeaser from 'components/03-organisms/stationery-teaser/stationery-teaser';

const Page = () => {

	return (
		<>
			<StationeryIntro />
			<StationeryImpression />
			<StationeryServices />
			<Bee />
			<StationeryTeaser />
		</>
	);

};

export default Page;
