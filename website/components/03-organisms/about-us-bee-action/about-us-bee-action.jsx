'use client';

import Section from 'components/04-layouts/section/section';
import Bee from 'components/02-molecules/bee/bee';

const AboutUsBeeAction = () => {

	return (
		<Section className="about-us-bee-action">
			<div className="about-us-bee-action__background background background--upper" />
			<Bee className="about-us-bee-action__bee" />
			<div className="about-us-bee-action__background background background--lower" />
		</Section>
	);

};

export default AboutUsBeeAction;
