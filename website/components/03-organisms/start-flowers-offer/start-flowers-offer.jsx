import Section from 'components/04-layouts/section/section';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Heading from 'components/01-atoms/heading/heading';
import Picture from 'components/01-atoms/picture/picture';
import Anchor from 'components/01-atoms/anchor/anchor';
import Article from 'components/04-layouts/article/article';

const StartFlowersOffer = () => {

	return (
		<Section className="start-flowers-offer">
			<div className="start-flowers__intro intro">
				<div className="intro__spacer" />
				<Article className="intro__content content">
					<Heading className="content__heading" level="h2">Angebot Bluemeparadies</Heading>
					<Paragraph className="content__text">Was uns die Natur mit Blumen widerspiegelt und schenkt, begeistert uns immer wieder aufs Neue. Mittels der Schönheit von Blumen Menschen dabei zu unterstützen, besondere Momente zu unterstreichen oder gar unvergesslich zu machen, ist für uns das schönste.</Paragraph>
				</Article>
			</div>
			<div className="start-flowers⁻offer__impressions impressions">
				<div className="impressions__item item">
					<div className="item__image-wrapper">
						<Picture className="item__image" src="/images/placeholders/placeholder-portrait.png" />
					</div>
					<div className="item__heading-wrapper">
						<Heading className="item__heading" level="h3">Hauskreationen</Heading>
						<Anchor className="item__link" hasArrow>Mehr erfahren</Anchor>
					</div>
				</div>
				<div className="impressions__item item">
					<div className="item__heading-wrapper">
						<Heading className="item__heading" level="h3">Saisonales</Heading>
						<Anchor className="item__link" hasArrow>Mehr erfahren</Anchor>
					</div>
					<div className="item__image-wrapper">
						<Picture className="item__image" src="/images/placeholders/placeholder-landscape.png" />
					</div>
				</div>
				<div className="impressions__item item">
					<div className="item__image-wrapper">
						<Picture className="item__image" src="/images/placeholders/placeholder-portrait.png" />
					</div>
					<div className="item__heading-wrapper">
						<Heading className="item__heading" level="h3">Hochzeit</Heading>
						<Anchor className="item__link" hasArrow>Mehr erfahren</Anchor>
					</div>
				</div>
				<div className="impressions__item item">
					<div className="item__heading-wrapper">
						<Heading className="item__heading" level="h3">Trauer / Beerdigung</Heading>
						<Anchor className="item__link" hasArrow>Mehr erfahren</Anchor>
					</div>
					<div className="item__image-wrapper">
						<Picture className="item__image" src="/images/placeholders/placeholder-landscape.png" />
					</div>
				</div>
			</div>
		</Section>
	);

};

export default StartFlowersOffer;
