import Anchor from 'components/01-atoms/anchor/anchor';
import Section from 'components/04-layouts/section/section';
import Image from 'next/image';
import Link from 'next/link';

const DesktopNavigation = () => {

	return (
		<Section className="desktop-navigation">
			<Link className="desktop-navigation__logo-link" href="/">
				<Image className="desktop-navigation__logo" src="/logos/logo-wespi-sins-bw-text-only.svg" width="300" height="300" alt="WESPI SINS Papeterie- und Bluemeparadies" priority />
			</Link>
			<div className="desktop-navigation__links links">
				<Anchor className="links__item" href="/stationery">Papeterie</Anchor>
				<Anchor className="links__item" href="/flowers">Blueme</Anchor>
				<Anchor className="links__item" href="/about-us">Über Uns</Anchor>
				<Anchor className="links__item" href="/contact">Kontakt</Anchor>
			</div>
		</Section>
	);

};

export default DesktopNavigation;
