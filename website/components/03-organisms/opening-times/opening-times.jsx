import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';

const OpeningTimes = () => {

	return (
		<Section className="opening-times">
			<Heading className="opening-times__heading" level="h2">ÖFFNUNGSZEITEN</Heading>
			<div className="opening-times__item item">
				<Heading className="opening-times__heading" level="h4">Montag, Dienstag, Donnerstag und Freitag</Heading>
				<Paragraph className="opening-times__times">08.30 – 12.00, 14.00 – 18.30 Uhr</Paragraph>
			</div>
			<div className="opening-times__item item">
				<Heading className="opening-times__heading" level="h4">Samstag</Heading>
				<Paragraph className="opening-times__times">08.00 – 15.00 Uhr</Paragraph>
			</div>
		</Section>
	);

};

export default OpeningTimes;
