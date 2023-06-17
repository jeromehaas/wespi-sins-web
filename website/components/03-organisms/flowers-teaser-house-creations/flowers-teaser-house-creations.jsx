'use client';

import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import { useRef } from 'react';
import useSlider from 'hooks/use-slider';
import Slider from 'components/02-molecules/slider/slider';
import SliderNavigation from 'components/02-molecules/slider-navigation/slider-navigation';

const FlowersTeaserHouseCreations = () => {

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
	const flowersTeaserHouseCreationsRef = useRef();

	// RENDER
	return (
		<Section className="flowers-teaser-house-creations" ref={ flowersTeaserHouseCreationsRef }>
			<Slider className="flowers-teaser-house-creations__slider" sliderController={ sliderController } />
			<div className="flowers-teaser-house-creations__content content">
				<Heading className="content__heading" level="h3">Haus-Kreationen</Heading>
				<Paragraph className="content__text">Besondere Momente verlangen nach etwas Besonderem. Wir denken unkonventionell und überraschend, damit ihr Moment mit unseren Blumen unvergesslich wird.</Paragraph>
				<SliderNavigation className="content__navigation" sliderController={ sliderController } />
			</div>
		</Section>
	);

};

export default FlowersTeaserHouseCreations;
