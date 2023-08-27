'use client';

// IMPORTS
import { useRef, useContext, useEffect } from 'react';
import { OrderContext } from 'contexts/order-context';
import { usePathname, useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import Anchor from 'components/01-atoms/anchor/anchor';
import Section from 'components/04-layouts/section/section';
import Image from 'next/image';
import Link from 'next/link';

// COMPONENT
const DesktopNavigation = () => {

	// SETUP REFS
	const sectionRef = useRef();

	// SETUP ORDER-CONTEXT
	const orderContext = useContext(OrderContext);

	// GET ROUTER AND PATHNAME
	const pathname = usePathname();
	const router = useRouter();

	// HANDLE LOGO CLICK
	const handleLogoClick = (event) => {
		event.preventDefault();
		if (orderContext && orderContext.menuIsOpen === true) return orderContext.setMenuIsOpen(false);
		if (pathname !== '/') return router.push('/');
	};

	// RENDER
	return (
		<Section className="desktop-navigation" ref={ sectionRef }>
			<div className="desktop-navigation__bar bar">
				<div className="bar__inner">
					<Link className="bar__logo-link" href="/" onClick={ (event) => handleLogoClick(event, '/') }>
						<Image className="bar__logo" src="/logos/logo-wespi-sins-bw-text-only.svg" width="300" height="300" alt="WESPI SINS Papeterie- und Bluemeparadies" priority />
					</Link>
					<div className="bar__links links">
						<Anchor className={ `links__item ${ pathname === '/stationery' ? 'links__item--active' : null }` } href="/stationery">Papeterie</Anchor>
						<Anchor className={ `links__item ${ pathname === '/flowers' ? 'links__item--active' : null }` } href="/flowers">Blueme</Anchor>
						<Anchor className={ `links__item ${ pathname === '/about-us' ? 'links__item--active' : null }` } href="/about-us">Über uns</Anchor>
						<Anchor className={ `links__item ${ pathname === '/contact' ? 'links__item--active' : null }` } href="/contact">Kontakt</Anchor>
					</div>
				</div>
			</div>
			<div className="desktop-navigation__placeholder" />
		</Section>
	);

};

// EXPORT
export default DesktopNavigation;
