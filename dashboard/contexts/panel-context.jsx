'use client';

// IMPORTS
import { createContext, useState, useMemo, useEffect } from 'react';

// CREATE CONTEXT
const PanelContext = createContext();

// CREATE PROVIDER
const PanelProvider = ({ children }) => {

	// SETUP STATE
	const [navigationIsOpen, setNavigationIsOpen] = useState(false);
	const [viewportWidth, setViewportWidth] = useState();

	// HANDLE RESIZE
	const handleResize = () => {
		setViewportWidth(window.innerWidth);
	};

	// GET VIEWPORT WIDTH
	useEffect(() => {
		setViewportWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => { return window.removeEventListener('resize', handleResize); };
	});

	// MEMOIZE VALUES
	const value = useMemo(() => ({
		navigationIsOpen,
		setNavigationIsOpen,
		viewportWidth,
		setViewportWidth,
	}), [navigationIsOpen, viewportWidth]);

	// RENDER
	return (
		<PanelContext.Provider value={ value }>
			{ children }
		</PanelContext.Provider>
	);

};

// EXPORT
export {
	PanelContext,
	PanelProvider,
};
