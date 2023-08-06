import Section from 'components/04-layouts/section/section';
import Image from 'next/image';
import Anchor from 'components/01-atoms/anchor/anchor';
import Link from 'next/link';

// COMPONENT
const Header = ({ className }) => {

	return (
		<div className={ ` ${ className } header` }>
			<Link className="header__logo-link" href="/">
				<Image className="header__logo" src="/logos/logo-wespi-sins-bw-minimal.svg" width="24" height="200" alt="WESPI SINS Papeterie- und Bluemeparadies" priority />
			</Link>
			<Anchor className="header__logout" href="/">Abmelden</Anchor>
		</div>
	);

};

// EXPORTS
export default Header;
