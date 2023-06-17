import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Anchor from 'components/01-atoms/anchor/anchor';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Article from 'components/04-layouts/article/article';
import Picture from 'components/01-atoms/picture/picture';

const StationeryServices = () => {

	return (
		<Section className="stationery-services">
			<div className="stationery-services__item item">
				<Article className="item__content content">
					<Heading className="content__heading" level="h2">Papeterie Artikel für Ihr Büro</Heading>
					<Paragraph className="content__text">Mit kleinen Helfern wird vieles einfacher. Wir haben auch ein paar tolle Artikel, mit denen das Arbeiten mehr Spass macht (Bsp. Agenda, Kalender, Verpacken, Schreibgeräte, Ordner, ...).</Paragraph>
					<Anchor className="content__link" hasArrow>Jetzt bestellen</Anchor>
				</Article>
				<Picture className="item__image" src="/images/placeholders/placeholder-landscape.png" width={ 1920 } height={ 1080 } alt="Papeterie Dienstleistung" />
			</div>
			<div className="stationery-services__item item">
				<Picture className="item__image" src="/images/placeholders/placeholder-landscape.png" width={ 1920 } height={ 1080 } alt="Papeterie Dienstleistung" />
				<Article className="item__content content">
					<Heading className="content__heading" level="h2">Papeterie Artikel für die Schule</Heading>
					<Paragraph className="content__text">Stylisches und Praktisches für die Schule finden Sie bei uns direkt kombiniert. Ob Bleistifte, Radierer, Lineal, Kugelschreiber, Couverts, Buntstifte, Füller, Schreibhefter, Agenden, Schulrechner, Papiere, Lernhilfen oder Produkte aus dem Sortiment Lehrplan 21.</Paragraph>
					<Anchor className="content__link" hasArrow>Jetzt bestellen</Anchor>
				</Article>
			</div>
		</Section>
	);
};

export default StationeryServices;
