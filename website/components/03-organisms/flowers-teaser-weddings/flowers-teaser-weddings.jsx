'use client';

// IMPORTS
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import useSlider from 'hooks/use-slider';
import Slider from 'components/02-molecules/slider/slider';
import SliderNavigation from 'components/02-molecules/slider-navigation/slider-navigation';

// COMPONENTS
const FlowersTeaserWeddings = ({ data }) => {

	// SETUP REFS
	const sectionRef = useRef();
	const sectionTimelineRef = useRef();

	// BRING IN SLIDER
	const sliderController = useSlider({
		images: data.flowers.data.attributes.weddings.images.data,
		direction: 'ltr',
	});

	// REGISTER SCROLL-TRIGGER PLUGIN
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	// FADE-IN ANIMATION
	useEffect(() => {
		const context = gsap.context(() => {
			sectionTimelineRef.current = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top bottom-=160px', end: 'bottom top+=160px', markers: false }, delay: 0.3 });
			sectionTimelineRef.current.to('.flowers-teaser-weddings .content', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
			sectionTimelineRef.current.to('.flowers-teaser-weddings .slider', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="flowers-teaser-weddings" ref={ sectionRef }>
			<div className="flowers-teaser-weddings__content content animation--fade-in">
				<Heading className="content__heading" level="h3">Hochzeiten</Heading>
				<Paragraph className="content__text">Wir unterstreichen Ihren ganz besonderen Tag mit dem Schönsten, das wir haben. Damit Sie Ihren Tag ein Leben lang voller Schönheit und Freude in Erinnerung behalten.</Paragraph>
				<SliderNavigation className="content__navigation" sliderController={ sliderController } />
			</div>
			<Slider className="flowers-teaser-weddings__slider slider animation--fade-in" sliderController={ sliderController } />
		</Section>
	);

};

// EXPORT
export default FlowersTeaserWeddings;
