'use client';

import Section from 'components/04-layouts/section/section';
import { gsap } from 'gsap';
import { useRef, useState, useEffect } from 'react';

const Grid = () => {

	// SETUP REFS
	const gridRef = useRef();

	const [isVisible, setIsVisible] = useState(true);

	// TOGGLE GRID
	const toggleGrid = () => {
		setIsVisible((value) => { return !value; });
	};

	// SHOW GRID
	const showGrid = () => {
		gsap.context(() => {
			gsap.to('.grid__column', { display: 'block' });
		}, gridRef);
	};

	// HIDE GRID
	const hideGrid = () => {
		gsap.context(() => {
			gsap.to('.grid__column', { display: 'none' });
		}, gridRef);
	};

	// SHOW OR HIDE ON FIRST RENDER
	useEffect(() => {
		isVisible ? showGrid() : hideGrid();
	}, [isVisible]);

	// LISTEN ON KEY "G" TO TOGGLE GRID
	useEffect(() => {
		document.addEventListener('keypress', (event) => {
			if (event.key === 'g') {
				toggleGrid();
			}
		});
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

export default Grid;
