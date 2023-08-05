import Section from 'components/04-layouts/section/section';
import Image from 'next/image';
import Anchor from 'components/01-atoms/anchor/anchor';

// COMPONENT
const Header = () => {

	return (
		<Section className="header">
			<Image className="header__logo" src="/logos/logo-wespi-sins-bw-minimal.svg" width="24" height="200" alt="WESPI SINS Papeterie- und Bluemeparadies" priority />
			<Anchor className="header__logout" href="/">Abmelden</Anchor>
		</Section>
	);

};

// EXPORTS
export default Header;
