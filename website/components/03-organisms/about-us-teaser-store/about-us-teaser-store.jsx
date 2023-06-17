'use client';

import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Button from 'components/01-atoms/button/button';
import { useRef } from 'react';
import useSlider from 'hooks/use-slider';
import Slider from 'components/02-molecules/slider/slider';
import SliderNavigation from 'components/02-molecules/slider-navigation/slider-navigation';

const AboutUsTeaserStore = () => {

	// DEFINE IMAGES
	const images = [
		{ id: 1, src: '/images/placeholders/placeholder-landscape.png', width: 1920, height: 1080, alt: 'Placeholder' },
		{ id: 2, src: '/images/placeholders/placeholder-portrait.png', width: 1080, height: 1350, alt: 'Placeholder' },
		{ id: 3, src: '/images/placeholders/placeholder-landscape.png', width: 1920, height: 1080, alt: 'Placeholder' },
		{ id: 4, src: '/images/placeholders/placeholder-portrait.png', width: 1080, height: 1350, alt: 'Placeholder' },
		{ id: 5, src: '/images/placeholders/placeholder-landscape.png', width: 1920, height: 1080, alt: 'Placeholder' },
	];

	// BRING IN SLIDER
	const sliderController = useSlider({
		images: images,
		direction: 'rtl',
	});

	// SETUP REFS
	const aboutUsTeaserStoreRef = useRef();

	// RENDER
	return (
		<Section className="about-us-teaser-store" ref={ aboutUsTeaserStoreRef }>
			<Slider className="about-us-teaser-store__slider" sliderController={ sliderController } />
			<div className="about-us-teaser-store__content content">
				<Heading className="content__heading" level="h3">Hier finden Sie uns</Heading>
				<Paragraph className="content__text">Besuchen Sie uns in den geschichtsträchtigen Räumen an der Bahnhofstrasse 15 in Sins.</Paragraph>
				<Button className="content__button">Anreise</Button>
				<SliderNavigation className="content__navigation" sliderController={ sliderController } />
			</div>
		</Section>
	);

};

export default AboutUsTeaserStore;
