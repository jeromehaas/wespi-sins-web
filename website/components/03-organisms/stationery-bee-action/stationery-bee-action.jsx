'use client';

import Section from 'components/04-layouts/section/section';
import Bee from 'components/02-molecules/bee/bee';

const StationeryBeeAction = () => {

	return (
		<Section className="stationery-bee-action">
			<div className="stationery-bee-action__background background background--upper" />
			<Bee className="stationery-bee-action__bee" />
			<div className="stationery-bee-action__background background background--lower" />
		</Section>
	);

};

export default StationeryBeeAction;
