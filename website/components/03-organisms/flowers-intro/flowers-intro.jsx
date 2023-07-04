'use client';

import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import HyperLink from 'components/01-atoms/hyperlink/hyperlink';
import useScroll from 'hooks/use-scroll';

const FlowersIntro = () => {

	// SCROLL HOOK
	const { scrollTo } = useScroll();

	// HANDLE CLICK
	const handleClick = (event, target) => {
		event.preventDefault();
		scrollTo(target);
	};

	// RENDER
	return (
		<Section className="flowers-intro">
			<Heading className="flowers-intro__heading" level="h1">
				Bei uns finden Sie Geschenke der Natur; <HyperLink onClick={ (event) => handleClick(event, '#flowers-teaser-seasonal') }>saisonale Blumen</HyperLink>, originelle <HyperLink onClick={ (event) => handleClick(event, '#flowers-teaser-house-creations') }>Hauskreationen</HyperLink>, Blumiges zu <HyperLink onClick={ (event) => handleClick(event, '#flowers-teaser-weddings') }>Hochzeiten</HyperLink> oder <HyperLink onClick={ (event) => handleClick(event, '#flowers-teaser-mourning') }>Trauerfeiern</HyperLink>.
			</Heading>
		</Section>
	);

};

export default FlowersIntro;
