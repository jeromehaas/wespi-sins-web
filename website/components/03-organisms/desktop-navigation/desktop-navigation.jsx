'use client';

// IMPORTS
import { useRef } from 'react';
import Anchor from 'components/01-atoms/anchor/anchor';
import Section from 'components/04-layouts/section/section';
import Image from 'next/image';
import Link from 'next/link';

// COMPONENT
const DesktopNavigation = () => {

	// SETUP REFS
	const sectionRef = useRef();

	// RENDER
	return (
		<Section className="desktop-navigation" ref={ sectionRef }>
			<div className="desktop-navigation__bar bar">
				<div className="bar__inner">
					<Link className="bar__logo-link" href="/">
						<Image className="bar__logo" src="/logos/logo-wespi-sins-bw-text-only.svg" width="300" height="300" alt="WESPI SINS Papeterie- und Bluemeparadies" priority />
					</Link>
					<div className="bar__links links">
						<Anchor className="links__item" href="/stationery">Papeterie</Anchor>
						<Anchor className="links__item" href="/flowers">Blueme</Anchor>
						<Anchor className="links__item" href="/about-us">Über Uns</Anchor>
						<Anchor className="links__item" href="/contact">Kontakt</Anchor>
					</div>
				</div>
			</div>
			<div className="desktop-navigation__placeholder" />
		</Section>
	);

};

// EXPORT
export default DesktopNavigation;
