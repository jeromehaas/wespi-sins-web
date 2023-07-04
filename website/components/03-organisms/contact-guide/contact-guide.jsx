import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Anchor from 'components/01-atoms/anchor/anchor';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Article from 'components/04-layouts/article/article';
import Picture from 'components/01-atoms/picture/picture';

const ContactGuide = () => {

	return (
		<Section className="contact-guide">
			<div className="contact-guide__box">
				<Picture className="box__image" src="/images/general/wespi-stiften-regal.webp" width={ 1920 } height={ 1080 } alt="Papeterie Dienstleistung" />
				<Article className="box__content content">
					<Heading className="content__heading" level="h2">Papeterie anfragen</Heading>
					<Paragraph className="content__text">Sie suchen nach dem passenden Schreibmaterial oder einer Geburtstagskarte? Egal ob Büro- oder Schulmaterial, eine passende Karte oder ein Füller, welcher Sie wieder zum Schreiben von Hand motiviert, in unserem Sortiment finden Sie eine breite Auswahl an Papeterieprodukten.</Paragraph>
					<Paragraph className="content__text">Sie können bei uns online bestellen oder via Mail oder Telefon mit uns Kontakt aufnehmen.</Paragraph>
					<Anchor className="content__link" hasArrow>Zur Onlinebestellung</Anchor>
				</Article>
			</div>
			<div className="contact-guide__box box">
				<Picture className="box__image" src="/images/general/wespi-floristik.webp" width={ 1920 } height={ 1080 } alt="Papeterie Dienstleistung" />
				<Article className="box__content content">
					<Heading className="content__heading" level="h2">Blumige Anfragen</Heading>
					<Paragraph className="content__text">Sie möchten jemandem oder Ihnen selbst Blumen schenken und benötigen eine Beratung? Es ist uns eine Ehre, Ihnen zu ganz verschiedenen Anlässen ein Lächeln oder Anteilnahme ins Herz zu zaubern. </Paragraph>
					<Paragraph className="content__text">Persönlichen Kontakt schätzen wir sehr, daher freuen wir uns auf Ihren Besuch in Sins oder auf Ihren Anruf.</Paragraph>
				</Article>
			</div>
		</Section>
	);
};

export default ContactGuide;
