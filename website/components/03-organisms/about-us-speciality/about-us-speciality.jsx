'use client';

// IMPORTS
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Section from 'components/04-layouts/section/section';
import Paragraph from 'components/01-atoms/paragraph/paragraph';

// COMPONENT
const AboutUsSpeciality = () => {

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
			sectionTimelineRef.current = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top bottom-=160px', end: 'bottom top+=160px', markers: false }, delay: 0.3 });
			sectionTimelineRef.current.to('.about-us-speciality .text', { autoAlpha: 1, top: 0, duration: 0.3 });
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RETURN
	return (
		<Section className="about-us-speciality" ref={ sectionRef }>
			<Paragraph className="about-us-speciality__text text animation--fade-in">Wir sind ein eingespieltes Team und freuen uns über   berührende Begegnungen mit verschiedensten Menschen. Ihr Wunsch oder Anliegen trifft auf unsere Kreativität – gemeinsam finden wir für Sie das passende Produkt.</Paragraph>
		</Section>
	);

};

// EXPORT
export default AboutUsSpeciality;
