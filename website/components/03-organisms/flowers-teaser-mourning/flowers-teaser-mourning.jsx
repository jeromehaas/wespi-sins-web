'use client';

import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import { useRef } from 'react';
import useSlider from 'hooks/use-slider';
import Slider from 'components/02-molecules/slider/slider';
import SliderNavigation from 'components/02-molecules/slider-navigation/slider-navigation';

const FlowersTeaserMourning = () => {

	// DEFINE IMPRESSIONS
	const images = [
		{ id: 1, src: 'https://picsum.photos/id/63/1920/1080', alt: 'Placeholder' },
		{ id: 2, src: 'https://picsum.photos/id/61/1920/1080', alt: 'Placeholder' },
		{ id: 3, src: 'https://picsum.photos/id/96/1080/1350', alt: 'Placeholder' },
		{ id: 4, src: 'https://picsum.photos/id/107/1920/1080', alt: 'Placeholder' },
		{ id: 5, src: 'https://picsum.photos/id/125/1080/1350', alt: 'Placeholder' },
	];

	// BRING IN SLIDER
	const sliderController = useSlider({
		images: images,
		direction: 'rtl',
	});

	// SETUP REFS
	const flowersTeaserMourningRef = useRef();

	// RENDER
	return (
		<Section className="flowers-teaser-mourning" ref={ flowersTeaserMourningRef }>
			<Slider className="flowers-teaser-mourning__slider" sliderController={ sliderController } />
			<div className="flowers-teaser-mourning__content content">
				<Heading className="content__heading" level="h3">Trauer / Beerdigung</Heading>
				<Paragraph className="content__text">In solch schwierigen Zeiten sprechen Blumen für uns. Es ist uns eine Ehre, für Sie mit unserem Handwerk eine passende Kreation zusammenzustellen und dem Leben Dank auzusprechen.</Paragraph>
				<SliderNavigation className="content__navigation" sliderController={ sliderController } />
			</div>
		</Section>
	);

};

export default FlowersTeaserMourning;
