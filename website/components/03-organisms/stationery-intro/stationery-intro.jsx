'use client';

import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import HyperLink from 'components/01-atoms/hyperlink/hyperlink';
import useScroll from 'hooks/use-scroll';

const StationeryIntro = () => {

	// SCROLL HOOK
	const { scrollTo } = useScroll();

	// HANDLE CLICK
	const handleClick = (event, target) => {
		event.preventDefault();
		scrollTo(target);
	};

	return (
		<Section className="stationery-intro">
			<Heading className="stationery-intro__heading" level="h1">
				Bei uns finden Sie eine grosse Auswahl an <HyperLink onClick={ (event) => handleClick(event, '#stationery-services') }>Büro-</HyperLink> und <HyperLink onClick={ (event) => handleClick(event, '#stationery-services') }>Schulmaterial</HyperLink>. In Sins oder Online.
			</Heading>
		</Section>
	);

};

export default StationeryIntro;
