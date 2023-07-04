import StationeryIntro from 'components/03-organisms/stationery-intro/stationery-intro';
import StationeryImpression from 'components/03-organisms/stationery-impression/stationery-impression';
import StationeryServices from 'components/03-organisms/stationery-services/stationery-services';
import StationeryBeeAction from 'components/03-organisms/stationery-bee-action/stationery-bee-action';
import StationeryTeaser from 'components/03-organisms/stationery-teaser/stationery-teaser';

const Page = () => {

	return (
		<>
			<StationeryIntro />
			<StationeryImpression />
			<StationeryServices />
			<StationeryBeeAction />
			<StationeryTeaser />
		</>
	);

};

export default Page;
