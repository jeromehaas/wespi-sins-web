import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Button from 'components/01-atoms/button/button';
import Section from 'components/04-layouts/section/section';
import Article from 'components/04-layouts/article/article';

const StationeryTeaser = () => {

	// RENDER
	return (
		<Section className="stationery-teaser">
			<Article className="stationery-teaser__content content">
				<Heading className="content__heading" level="h2">Bequem online bestellen</Heading>
				<Paragraph className="content__text">Als bestehender Kunde können Sie jederzeit hier online bestellen. Die Bestellung ist innerhalb von maximal fünf Arbeitstagen bei uns abholbereit und wird mittels Monatsrechnung verrechnet. Falls Sie noch kein Kunde von uns sind, rufen Sie uns am besten an. </Paragraph>
				<Button href="">Jetzt bestellen</Button>
			</Article>
		</Section>
	);

};

export default StationeryTeaser;
