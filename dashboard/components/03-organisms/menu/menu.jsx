// IMPORTS
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Anchor from 'components/01-atoms/anchor/anchor';
import Heading from 'components/01-atoms/heading/heading';
import Section from 'components/04-layouts/section/section';

// COMPONENT
const Menu = () => {

	// RENDER
	return (
		<Section className="menu">
			<div className="menu__item item">
				<Heading className="item__heading" level="h2">Neuigkeiten</Heading>
				<Paragraph className="item__text">Hier können Neuigkeiten erstellt, angepasst und gelöscht werden.</Paragraph>
				<Anchor className="item__link" href="/news" hasArrow>Zu den Neuigkeiten</Anchor>
			</div>
			<div className="menu__item item">
				<Heading className="item__heading" level="h2">Blumen</Heading>
				<Paragraph className="item__text">Hier können die Impressionen der verschiedenen Blumen-Kategorien angepsst werden.</Paragraph>
				<Anchor className="item__link" href="/flowers" hasArrow>Zu den Blumen</Anchor>
			</div>
			<div className="menu__item item">
				<Heading className="item__heading" level="h2">Bestellungen</Heading>
				<Paragraph className="item__text">Hier können die Bestellungen angesehen werden.</Paragraph>
				<Anchor className="item__link" href="/orders" hasArrow>Zu den Blumen</Anchor>
			</div>
			<div className="menu__item item">
				<Heading className="item__heading" level="h2">Nachrichten</Heading>
				<Paragraph className="item__text">Hier können die Nachrichten vom Kontakt-Formular gelesen werden.</Paragraph>
				<Anchor className="item__link" href="/messages" hasArrow>Zu den Nachrichten</Anchor>
			</div>
		</Section>
	);

};

export default Menu;
