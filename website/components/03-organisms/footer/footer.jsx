'use client';

import Section from 'components/04-layouts/section/section';
import Image from 'next/image';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Link from 'next/link';
import Button from 'components/01-atoms/button/button';
import Anchor from 'components/01-atoms/anchor/anchor';
import { OrderContext } from 'contexts/order-context';
import { useContext } from 'react';

const Footer = () => {

	// BRING IN CONTEXT
	const orderContext = useContext(OrderContext);

	// HANDLE OPEN ORDER MENU
	const handleOpenOrderMenu = () => {
		orderContext.setMenuIsOpen(true);
	};

	// RENDER
	return (
		<Section className="footer">
			<Image className="footer__logo" src="/logos/logo-wespi-sins-bw-full.png" width="300" height="300" alt="WESPI SINS Papeterie- und Bluemeparadies" />
			<address className="footer__contact-details contact-details">
				<Heading className="contact-details__heading" level="h4">WESPI SINS <br /> Papeterie- und Bluemeparadies</Heading>
				<Paragraph className="contact-details__item paragraph">Bahnhofstrasse 15</Paragraph>
				<Paragraph className="contact-details__item paragraph">5643 Sins</Paragraph>
				<Link className="contact-details__item paragraph" href="mailto:info@wespi-sins.ch">info@wespi-sins.ch</Link>
				<Link className="contact-details__item paragraph" href="tel:0417870887">041 787 08 87</Link>
			</address>
			<div className="footer__links links">
				<Button className="links__button" onClick={ handleOpenOrderMenu }>Bestellung Papeterieartikel</Button>
				<div className="links__navigation">
					<Anchor className="navigation__item" href="/data-privacy">Datenschutz</Anchor>
					<Anchor className="navigation__item" href="/imprint">Impressum</Anchor>
				</div>
			</div>
		</Section>
	);

};

export default Footer;
