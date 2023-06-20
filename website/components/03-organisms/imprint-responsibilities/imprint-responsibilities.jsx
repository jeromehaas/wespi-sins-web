import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Link from 'next/link';

const ImprintResponsiibilities = () => {

	return (
		<Section className="imprint-responsibilities">
			<div className="imprint-responsibilities__contributor contributor">
				<Heading className="contributor__heading" level="h4">Inhaberin</Heading>
				<Paragraph className="contributor__item">WESPI SINS</Paragraph>
				<Paragraph className="contributor__item">Papeterie- und Bluemeparadies</Paragraph>
				<Paragraph className="contributor__item">Claudia Wespi</Paragraph>
				<Paragraph className="contributor__item">Bahnhofstrasse 15</Paragraph>
				<Paragraph className="contributor__item">5643 Sins</Paragraph>
			</div>
			<div className="imprint-responsibilities__contributor contributor">
				<Heading className="contributor__heading" level="h4">Fotografie</Heading>
				<Paragraph className="contributor__item">Samira Haas</Paragraph>
				<Link className="contributor__item" href="https://samirahaas.ch">samirahaas.ch</Link>
			</div>
			<div className="imprint-responsibilities__contributor contributor">
				<Heading className="contributor__heading" level="h4">Webkonzeption und Gestaltung</Heading>
				<Paragraph className="contributor__item">heller grafik</Paragraph>
				<Paragraph className="contributor__item" href="https://hellergrafik.ch">Isabel Heller</Paragraph>
			</div>
			<div className="imprint-responsibilities__contributor contributor">
				<Heading className="contributor__heading" level="h4">Programmierung</Heading>
				<Paragraph className="contributor__item">haas web solutions</Paragraph>
				<Link className="contributor__item" href="https://haaswebsolutions.io">haaswebsolutions.io</Link>
			</div>
			<div className="imprint-responsibilities__disclaimer disclaimer">
				<Paragraph>Copyright © 2023 Claudia Wespi. Alle Rechte vorbehalten. Für die Vervielfältigung oder Veränderung jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.</Paragraph>
			</div>
		</Section>

	);

};

export default ImprintResponsiibilities;
