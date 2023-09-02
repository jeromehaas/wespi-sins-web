'use client';

// IMPORTS
import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import Section from 'components/04-layouts/section/section';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Link from 'next/link';
import Button from 'components/01-atoms/button/button';
import { setCookie, getCookie } from 'cookies-next';

// COMPONENT
const CookieBanner = () => {

	// SETUP REFS
	const sectionRef = useRef();
	const sectionTimelineRef = useRef();

	// ACCEPT COOKIE-BANNER
	const acceptCookieBanner = () => {

		// CREATE TOKEN
		const token = {
			expiry: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
			data: true,
		};

		// SET COOKIE
		setCookie('wespi-cookie-banner', token);

		// GET HEIGHT OF BANNER
		const { height: sectionHeight } = sectionRef.current.getBoundingClientRect();

		// HIDE COOKIE-BANNER
		sectionTimelineRef.current = gsap.timeline();
		sectionTimelineRef.current.to('.cookie-banner', { autoAlpha: 1, bottom: `-${ sectionHeight }px)`, duration: 1 });
		sectionTimelineRef.current.to('.cookie-banner', { autoAlpha: '0', duration: 0 }, 3);

	};

	// SHOW COOKIE-BANNER
	useLayoutEffect(() => {

		// GET COOKIE
		const cookie = getCookie('wespi-cookie-banner');

		// IF NO COOKIE IS FOUND SHOW COOKIE BANNER
		if (!cookie) {

			// GET HEIGHT OF BANNER
			const { height: sectionHeight } = sectionRef.current.getBoundingClientRect();

			// SHOW COOKIE BANNER
			sectionTimelineRef.current = gsap.timeline({ delay: 1 });
			sectionTimelineRef.current.to('.cookie-banner', { autoAlpha: 1, bottom: `-${ sectionHeight }px)`, duration: 0 });
			sectionTimelineRef.current.to('.cookie-banner', { bottom: '-0px)', duration: 1 }, 3);

		};

	}, []);

	// RENDER
	return (
		<Section className="cookie-banner" ref={ sectionRef }>
			<Paragraph className="cookie-banner__text text">Um die Website für Sie optimal zu gestalten und fortlaufend verbessern zu können, werden Cookies verwendet. Durch die weitere Nutzung der Website stimmen Sie der Verwendung von Cookies zu. Weitere Informationen dazu finden Sie in der <Link className="text__link" href="/data-privacy">Datenschutzerklärung</Link>.</Paragraph>
			<Button className="cookie-banner__button" onClick={ acceptCookieBanner }>Zustimmen</Button>
		</Section>
	);

};

// EXPORT
export default CookieBanner;
