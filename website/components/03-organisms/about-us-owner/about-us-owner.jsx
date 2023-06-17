import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Article from 'components/04-layouts/article/article';
import Picture from 'components/01-atoms/picture/picture';

const AboutUsOwner = () => {

	return (
		<Section className="about-us-owner">
			<div className="about-us-owner__item item">
				<Picture className="item__image" src="/images/placeholders/placeholder-landscape.png" width={ 1920 } height={ 1080 } alt="Papeterie Dienstleistung" />
				<Article className="item__content content">
					<Heading className="content__heading" level="h2">Claudia Wespi</Heading>
					<Paragraph className="content__text">1996 hat sich Claudia Wespi mit dem Bluemeparadies einen Traum erfüllt. Und der hält bis heute an. Für viele ist das Bluemeparadies ein Ort wo alles möglich ist und genau das macht Claudia Wespi glücklich. Ihr Bluemeparadies soll Freude schenken.</Paragraph>
				</Article>
			</div>
		</Section>
	);
};

export default AboutUsOwner;
