import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import HyperLink from 'components/01-atoms/hyperlink/hyperlink';

const FlowersIntro = () => {

	return (
		<Section className="flowers-intro">
			<Heading className="flowers-intro__heading" level="h1">
				Bei uns finden Sie Geschenke der Natur; <HyperLink>saisonale Blumen</HyperLink>, originelle <HyperLink>Hauskreationen</HyperLink>, Blumiges zu <HyperLink>Hochzeiten</HyperLink> oder <HyperLink>Trauerfeiern</HyperLink>.
			</Heading>
		</Section>
	);

};

export default FlowersIntro;
