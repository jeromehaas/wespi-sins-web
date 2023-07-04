import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Article from 'components/04-layouts/article/article';
import Picture from 'components/01-atoms/picture/picture';

const ContactLocation = () => {

	return (
		<Section className="contact-location">
			<div className="contact-location__item item">
				<Picture className="item__image" src="/images/general/wespi-geschaeft.webp" width={ 1920 } height={ 1080 } alt="Papeterie Dienstleistung" />
				<Article className="item__content content">
					<Heading className="content__heading" level="h2">UNSER Kreatives Paradies In den alten Sinser Bahnhofsmauern </Heading>
					<Paragraph className="content__text">Besuchen Sie uns und lassen Sie sich von unserem Blumen- und Papeteriesortiment inspirieren.</Paragraph>
				</Article>
			</div>
		</Section>
	);
};

export default ContactLocation;
