import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Anchor from 'components/01-atoms/anchor/anchor';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Article from 'components/04-layouts/article/article';
import Picture from 'components/01-atoms/picture/picture';
import ListItem from 'components/01-atoms/list-item/list-item';

const AboutUsCta = () => {

	return (
		<Section className="about-us-cta">
			<div className="about-us-cta__item item">
				<Article className="item__content content">
					<Heading className="content__heading" level="h2">Wir sind für Sie da</Heading>
					<Paragraph className="content__text">Alle in unserem Team bringen andere Fähigkeiten und Eigenschaften mit. Somit sind wir gemeinsam perfekt und seit über 10 Jahren ein Team, welches sich gegenseitig unterstützt und weiterbringt. Neben dem Team an der Front, unterstützen uns unsere Wichtelhelfer tatkräftig im Hintergrund.</Paragraph>
					<ListItem className="content__list-item">– Claudia, Inhaberin, Floristin EFZ</ListItem>
					<ListItem className="content__list-item">– Daniela, Floristin EFZ</ListItem>
					<ListItem className="content__list-item">– Debbi, Floristin EFZ</ListItem>
					<Anchor className="content__link" hasArrow>Jetzt bestellen</Anchor>
				</Article>
				<Picture className="item__image" src="/images/placeholders/placeholder-landscape.png" width={ 1920 } height={ 1080 } alt="Papeterie Dienstleistung" />
			</div>
		</Section>
	);
};

export default AboutUsCta;
