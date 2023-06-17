import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import HyperLink from 'components/01-atoms/hyperlink/hyperlink';

const StationeryIntro = () => {

	return (
		<Section className="stationery-intro">
			<Heading className="stationery-intro__heading" level="h1">
				Bei uns finden Sie eine grosse Auswahl an <HyperLink>Büro-</HyperLink> und <HyperLink>Schulmaterial</HyperLink>. In Sins oder Online.
			</Heading>
		</Section>
	);

};

export default StationeryIntro;
