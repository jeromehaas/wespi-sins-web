import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Section from 'components/04-layouts/section/section';

const AboutUsQuote = () => {

	return (
		<Section className="about-us-quote">
			<div className="about-us__content content">
				<Heading className="content__heading" level="h3">«Ich liebe das Leben, die Menschen, die Natur, die Kreativität, das Einzigartige und das Sinnliche.»</Heading>
				<Paragraph className="content__text">Claudia Wespi, Inhaberin</Paragraph>
			</div>
		</Section>
	);

};

export default AboutUsQuote;
