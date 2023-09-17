'use client';

// IMPORTS
import { useRef, useEffect, Fragment } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import useSlider from 'hooks/use-slider';
import Slider from 'components/02-molecules/slider/slider';
import SliderNavigation from 'components/02-molecules/slider-navigation/slider-navigation';

// COMPONENT
const FlowersTeaserHouseCreations = ({ data }) => {

	// SETUP REFS
	const sectionRef = useRef();
	const sectionTimelineRef = useRef();

	// BRING IN SLIDER
	const sliderController = useSlider({
		images: data.flowers && data.flowers[1].attributes.images.data,
		direction: 'rtl',
	});

	// REGISTER SCROLL-TRIGGER PLUGIN
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	// FADE-IN ANIMATION
	useEffect(() => {
		const context = gsap.context(() => {
			sectionTimelineRef.current = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top bottom-=160px', end: 'bottom top+=160px', markers: false }, delay: 0.3 });
			sectionTimelineRef.current.to('.flowers-teaser-house-creations .content', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
			sectionTimelineRef.current.to('.flowers-teaser-house-creations .slider', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
		}, sectionRef);
		return () => context.revert();
	}, []);

	// RENDER
	return (
		<Section className="flowers-teaser-house-creations" ref={ sectionRef }>
			{ data.flowers ? (
				<Fragment>
					<Slider className="flowers-teaser-house-creations__slider slider animation--fade-in" sliderController={ sliderController } />
					<div className="flowers-teaser-house-creations__content content animation--fade-in">
						<Heading className="content__heading" level="h3">{ data.flowers[1].attributes.heading }</Heading>
						<Paragraph className="content__text">{ data.flowers[1].attributes.text }</Paragraph>
						<SliderNavigation className="content__navigation" sliderController={ sliderController } />
					</div>
				</Fragment>
			) : null}
		</Section>
	);

};

// EXPORT
export default FlowersTeaserHouseCreations;
