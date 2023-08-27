'use client';

// IMPORTS
import { useRef } from 'react';
import Section from 'components/04-layouts/section/section';
import Bee from 'components/02-molecules/bee/bee';

// COMPONENT
const ContactBeeAction = () => {

	// SETUP REFS
	const sectionRef = useRef();

	// RENDER
	return (
		<Section className="contact-bee-action" ref={ sectionRef }>
			<div className="contact-bee-action__background background background--upper" />
			<Bee className="contact-bee-action__bee" />
			<div className="contact-bee-action__background background background--lower" />
		</Section>
	);

};

// EXPORT
export default ContactBeeAction;
