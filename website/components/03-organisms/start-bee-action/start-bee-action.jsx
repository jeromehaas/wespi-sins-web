'use client';

import Section from 'components/04-layouts/section/section';
import Bee from 'components/02-molecules/bee/bee';

const StartBeeAction = () => {

	return (
		<Section className="start-bee-action">
			<div className="start-bee-action__background background background--upper" />
			<Bee className="start-bee-action__bee" />
			<div className="start-bee-action__background background background--lower" />
		</Section>
	);

};

export default StartBeeAction;
