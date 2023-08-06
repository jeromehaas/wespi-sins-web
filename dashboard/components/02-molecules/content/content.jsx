'use client';

// IMPORTS
import { useContext, useEffect } from 'react';
import { PanelContext } from 'contexts/panel-context';
import { gsap } from 'gsap';

// COMPONENT
const Content = ({ className = '', children = null }) => {

	// BRING IN CONTEXT
	const panelContext = useContext(PanelContext);

	// TOGGLE NAVIGATION
	useEffect(() => {
		if (panelContext.viewportWidth > 1000) {
			gsap.to('.content', { gridArea: '2 / 2 / 3 / 3', duration: 0 });
		} else if (panelContext.navigationIsOpen) {
			gsap.to('.content', { gridArea: '2 / 1 / 3 / 3', duration: 0 });
		} else {
			gsap.to('.content', { gridArea: '2 / 2 / 3 / 3', duration: 0 });
		}
	}, [panelContext.navigationIsOpen, panelContext.viewportWidth]);

	// RENDER
	return (
		<div className={ ` ${ className } content` }>
			{ children }
		</div>
	);

};

// EXPORTS
export default Content;
