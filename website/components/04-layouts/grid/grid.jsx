'use client';

// IMPORTS
import Section from 'components/04-layouts/section/section';
import { gsap } from 'gsap';
import { useRef, useEffect, useState } from 'react';

// COMPONENT
const Grid = () => {

	// SETUP REFS
	const gridRef = useRef();

	// SETUP STATE
	const [isVisible, setIsVisible] = useState(false);

	// TOGGLE GRID
	const toggleGrid = (event) => {
		if (event && event.key === 'g' && event.altKey) setIsVisible((value) => !value);
	};

	// CHANGE STYLE OF GRID
	useEffect(() => {
		isVisible
			?	gsap.context(() => gsap.to('.grid__column', { display: 'block' }), gridRef)
			:	gsap.context(() => gsap.to('.grid__column', { display: 'none' }), gridRef);
	}, [isVisible]);

	// LISTEN ON KEY "G" TO TOGGLE GRID
	useEffect(() => {
		document.addEventListener('keyup', (event) => { return toggleGrid(event); });
		return () => { return document.removeEventListener('keyup', toggleGrid); };
	}, []);

	// RENDER
	return (
		<Section className="grid" ref={ gridRef }>
			<div className="grid__column" />
			<div className="grid__column" />
			<div className="grid__column" />
			<div className="grid__column" />
			<div className="grid__column" />
			<div className="grid__column" />
			<div className="grid__column" />
			<div className="grid__column" />
			<div className="grid__column" />
			<div className="grid__column" />
			<div className="grid__column" />
			<div className="grid__column" />
		</Section>
	);

};

// EXPORT
export default Grid;
