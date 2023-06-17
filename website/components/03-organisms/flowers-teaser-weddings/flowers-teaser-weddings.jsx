'use client';

import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import { useRef } from 'react';
import useSlider from 'hooks/use-slider';
import Slider from 'components/02-molecules/slider/slider';
import SliderNavigation from 'components/02-molecules/slider-navigation/slider-navigation';

const FlowersTeaserWeddings = () => {

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
		direction: 'ltr',
	});

	// SETUP REFS
	const flowersTeaserSeasonalRef = useRef();

	// RENDER
	return (
		<Section className="flowers-teaser-weddings" ref={ flowersTeaserSeasonalRef }>
			<div className="flowers-teaser-weddings__content content">
				<Heading className="content__heading" level="h3">Hochzeiten</Heading>
				<Paragraph className="content__text">Wir unterstreichen Ihren ganz besonderen Tag mit dem Schönsten, das wir haben. Damit Sie Ihren Tag ein Leben lang voller Schönheit und Freude in Erinnerung behalten.</Paragraph>
				<SliderNavigation className="content__navigation" sliderController={ sliderController } />
			</div>
			<Slider className="flowers-teaser-weddings__slider" sliderController={ sliderController } />
		</Section>
	);

};

export default FlowersTeaserWeddings;
