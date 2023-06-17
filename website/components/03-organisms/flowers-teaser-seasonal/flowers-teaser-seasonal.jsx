'use client';

import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import { useRef } from 'react';
import useSlider from 'hooks/use-slider';
import Slider from 'components/02-molecules/slider/slider';
import SliderNavigation from 'components/02-molecules/slider-navigation/slider-navigation';

const FlowersTeaserSeasonal = () => {

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
		<Section className="flowers-teaser-seasonal" ref={ flowersTeaserSeasonalRef }>
			<div className="flowers-teaser-seasonal__content content">
				<Heading className="content__heading" level="h3">Saisonales</Heading>
				<Paragraph className="content__text">Die Natur beschenkt uns in jeder Jahreszeit mit besonderen Formen und Farben. Wir sind immer wieder aufs Neue fasziniert, wie vielseitig unsere Natur ist und haben eine grosse Freude mit saisonalen Blumen zu arbeiten und deren Vielfalt aufzuzeigen.</Paragraph>
				<SliderNavigation className="content__navigation" sliderController={ sliderController } />
			</div>
			<Slider className="flowers-teaser-seasonal__slider" sliderController={ sliderController } />
		</Section>
	);

};

export default FlowersTeaserSeasonal;
