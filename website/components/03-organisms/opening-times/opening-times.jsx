import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';

const OpeningTimes = () => {

	return (
		<Section className="opening-times">
			<Heading className="opening-times__heading" level="h2">Öffnungszeiten</Heading>
			<div className="opening-times__content content">
				<div className="content__item item">
					<Heading className="item__heading" level="h4">Montag, Dienstag, Donnerstag und Freitag</Heading>
					<Paragraph className="item__times">08.30 – 12.00, 14.00 – 18.30 Uhr</Paragraph>
				</div>
				<div className="content__item item">
					<Heading className="item__heading" level="h4">Samstag</Heading>
					<Paragraph className="item__times">08.00 – 15.00 Uhr</Paragraph>
				</div>
			</div>
		</Section>
	);

};

export default OpeningTimes;
