import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Button from 'components/01-atoms/button/button';
import Section from 'components/04-layouts/section/section';
import Article from 'components/04-layouts/article/article';

const StartIntro = () => {

	// RENDER
	return (
		<Section className="start-intro">
			<div className="start-intro__spacer" />
			<Article className="start-intro__content content">
				<Heading className="content__heading" level="h2">Seit Jahren mit viel Herzblut UND Leidenschaft für Sie da</Heading>
				<Paragraph className="content__text">Ob im Alltag, an Hochzeiten, zu Trauer- oder Geburtstagsfesten – wir erfüllen saisonale Blumenwünsche. Zu Blumen gehört oft eine Karte und dazu braucht es natürlich einen toller Stift. Auch hier lassen wir Sie nicht im Stich; bei uns gibt es seit über 17 Jahren Papeterieprodukte zu kaufen. Ob zum Geschenk oder für Ihren Bürobedarf, wir beraten Sie gerne, damit Sie die für sich passenden Produkte finden.</Paragraph>
				<Button href="">Mehr über uns</Button>
			</Article>
		</Section>
	);

};

export default StartIntro;
