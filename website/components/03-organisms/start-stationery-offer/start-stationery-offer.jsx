import Section from 'components/04-layouts/section/section';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Heading from 'components/01-atoms/heading/heading';
import Picture from 'components/01-atoms/picture/picture';
import Anchor from 'components/01-atoms/anchor/anchor';
import Article from 'components/04-layouts/article/article';

const StartStationeryOffer = () => {

	return (
		<Section className="start-stationery-offer">
			<div className="start-stationery__intro intro">
				<div className="intro__spacer" />
				<Article className="intro__content content">
					<Heading className="content__heading" level="h2">Angebot Papeterieparadies</Heading>
					<Paragraph className="content__text">Ob Druckerpatrone, schöne Karten oder Geschenkverpackungen – in unserem Sortiment finden Sie das, was Sie brauchen.</Paragraph>
				</Article>
			</div>
			<div className="start-stationery⁻offer__impressions impressions">
				<div className="impressions__item item">
					<div className="item__image-wrapper">
						<Picture className="item__image" src="/images/placeholders/placeholder-portrait.png" />
					</div>
					<div className="item__heading-wrapper">
						<Heading className="item__heading" level="h3">Schule</Heading>
						<Anchor className="item__link" hasArrow>Mehr erfahren</Anchor>
					</div>
				</div>
				<div className="impressions__item item">
					<div className="item__heading-wrapper">
						<Heading className="item__heading" level="h3">Büro</Heading>
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

export default StartStationeryOffer;
