'use client';

// IMPORTS
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Markdown from 'components/01-atoms/markdown/markdown';

// COMPONENT
const LegalInformations = () => {

	// SETUP REFS
	const sectionRef = useRef();
	const sectionTimelineRef = useRef();

	// REGISTER SCROLL-TRIGGER PLUGIN
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	// FADE-IN ANIMATION
	useEffect(() => {
		const context = gsap.context(() => {
			sectionTimelineRef.current = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top bottom-=160px', end: 'bottom top+=160px', markers: false }, delay: 0.3 }, 0);
			sectionTimelineRef.current.to('.legal-informations .paragraphs', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="legal-informations" ref={ sectionRef }>
			<div className="legal-informations__paragraphs paragraphs animation--fade-in">
				<div className="paragraphs__item item">
					<Heading className="item__heading" level="h4">Namen und Anschrift der für die Datenverarbeitung Verantwortlichen</Heading>
					<Markdown className="item__text">Wespi Sins</Markdown>
				</div>
			</div>
			<div className="legal-informations__paragraphs paragraphs animation--fade-in">
				<div className="paragraphs__item item">
					<Heading className="item__heading" level="h4">Datenschutzgesetz</Heading>
					<Markdown className="item__text">Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutz-rechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese Bestimmungen ein. Persönliche Daten werden streng vertraulich behandelt und weder an Dritte verkauft noch weiter gegeben. In enger Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen. Beim Zugriff auf unsere Webseiten werden folgende Daten in Logfiles gespeichert: IP-Adresse, Datum, Uhrzeit, Browser-Anfrage und allg. übertragene Informationen zum Betriebssystem resp. Browser. Diese Nutzungsdaten bilden die Basis für statistische, anonyme Auswertungen, so dass Trends erkennbar sind, anhand derer wir unsere Angebote entsprechend verbessern können.</Markdown>
				</div>
			</div>
		</Section>
	);

};

// EXPORT
export default LegalInformations;
