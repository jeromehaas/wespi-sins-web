'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import Link from 'next/link';
import Section from 'components/04-layouts/section/section';
import Image from 'next/image';
import Hamburger from 'components/01-atoms/hamburger/hamburger';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';

const MobileNavigation = () => {

	// SETUP REFS
	const mobileNavigationRef = useRef();
	const menuTimelineRef = useRef();

	// SETUP STATE
	const [isOpen, setIsOpen] = useState(false);

	// GET ROUTER AND PATHNAME
	const pathname = usePathname();
	const router = useRouter();

	// OPEN MENU
	const openMenu = () => {
		menuTimelineRef.current.play();
	};

	// CLOSE MENU
	const closeMenu = () => {
		menuTimelineRef.current.reverse();
	};

	// TOGGLE MENU
	const toggleMenu = () => {
		setIsOpen(!isOpen);
		isOpen ? closeMenu() : openMenu();
	};

	// HANDLE LOGO CLICK
	const handleLogoClick = (event) => {
		event.preventDefault();
		if (pathname !== '/') router.push('/');
	};

	// HANDLE LINK CLICK
	const handleLinkClick = (event, targetPath) => {
		event.preventDefault();
		if (pathname === targetPath) {
			toggleMenu();
		} else {
			toggleMenu();
			router.push(targetPath);
		};
	};

	// SETUP MENU ANIMATION
	useEffect(() => {
		const context = gsap.context(() => {
			menuTimelineRef.current = gsap.timeline({ paused: true });
			menuTimelineRef.current.to('.mobile-navigation .navigation__menu', { right: '0%', duration: 0.5 }, 0);
			menuTimelineRef.current.to('.mobile-navigation .navigation__menu .menu__links', { autoAlpha: 1, top: '0', duration: 0.5 }, 0.5);
			menuTimelineRef.current.to('.mobile-navigation .navigation__menu .menu__contact-details', { autoAlpha: 1, top: '0', duration: 0.5 }, 0.75);
			menuTimelineRef.current.to('.mobile-navigation .navigation__menu .menu__business-hours', { autoAlpha: 1, top: '0', duration: 0.5 }, 1);
		}, mobileNavigationRef);
		return () => { return context.revert(); };
	}, []);

	// RENDER
	return (
		<Section className="mobile-navigation" ref={ mobileNavigationRef }>
			<div className="mobile-navigation__background" />
			<div className="mobile-navigation__placeholder" />
			<div className="mobile-navigation__bar bar">
				<Link className="bar__logo-link" href="/" onClick={ (event) => { return handleLogoClick(event, '/'); } }>
					<Image className="bar__logo" src="/logos/logo-wespi-sins-bw-minimal.svg" alt="Wespi Sins" width="140" height="40" priority />
				</Link>
				<Hamburger className="bar__hamburger" isOpen={ isOpen } onClick={ toggleMenu } />
			</div>
			<div className="navigation__menu menu">
				<div className="menu__links links animation--fade-in">
					<Link className="links__item" href="/" onClick={ (event) => { return handleLinkClick(event, '/'); } }>Startseite</Link>
					<Link className="links__item" href="/stationery" onClick={ (event) => { return handleLinkClick(event, '/stationery'); } }>Papeterie</Link>
					<Link className="links__item" href="/flowers" onClick={ (event) => { return handleLinkClick(event, '/flowers'); } }>Blumen</Link>
					<Link className="links__item" href="/about-us" onClick={ (event) => { return handleLinkClick(event, '/about-us'); } }>Über uns</Link>
					<Link className="links__item" href="/contact" onClick={ (event) => { return handleLinkClick(event, '/contact'); } }>Kontakt</Link>
				</div>
				<div className="menu__contact-details contact-details animation--fade-in">
					<Heading className="contact-details__heading" level="h4">WESPI SINS <br />Papeterie- und Bluemeparadies</Heading>
					<Paragraph className="contact-details__item paragraph">Bahnhofstrasse 15</Paragraph>
					<Paragraph className="contact-details__item paragraph">5643 Sins</Paragraph>
					<Link className="contact-details__item paragraph" href="mailto:info@wespi-sins.ch">info@wespi-sins.ch</Link>
					<Link className="contact-details__item paragraph" href="tel:0417870887">041 787 08 87</Link>
				</div>
				<div className="menu__business-hours business-hours animation--fade-in">
					<Heading className="business-hours__heading" level="h4">Öffnungszeiten</Heading>
					<Paragraph className="business-hours__item paragraph">Montag, Dienstag, Donnerstag und Freitag </Paragraph>
					<Paragraph className="business-hours__item paragraph">08.30 – 12.00, 14.00 – 18.30 Uhr</Paragraph>
					<Paragraph className="business-hours__item paragraph">Samstag</Paragraph>
					<Paragraph className="business-hours__item paragraph">08.00 – 15.00 Uhr</Paragraph>
				</div>
			</div>
		</Section>
	);

};

export default MobileNavigation;
