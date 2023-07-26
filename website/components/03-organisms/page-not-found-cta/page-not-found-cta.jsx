'use client';

// IMPORTS
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Section from 'components/04-layouts/section/section';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Button from 'components/01-atoms/button/button';

// COMPONENT
const PageNotFoundCta = () => {

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
			sectionTimelineRef.current.to('.page-not-found-cta .content__text', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
			sectionTimelineRef.current.to('.page-not-found-cta .content__button', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="page-not-found-cta" ref={ sectionRef }>
			<div className="page-not-found-cta__content content">
				<Paragraph className="content__text animation--fade-in">Es scheint, dass diese Seite nicht mehr zu existieren scheint. Bitte kehren Sie zurück zur Website</Paragraph>
				<Button className="content__button animation--fade-in" href="/">Zurück zur Website</Button>
			</div>
		</Section>
	);

};

// EXPORT
export default PageNotFoundCta;
