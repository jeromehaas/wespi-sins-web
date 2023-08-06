'use client';

// IMPORTS
import Anchor from 'components/01-atoms/anchor/anchor';
import { gsap } from 'gsap';
import { useRef, useState, useEffect, useContext, Fragment } from 'react';
import { PanelContext } from 'contexts/panel-context';
import { usePathname, useParams, useRouter } from 'next/navigation';

// COMPONENT
const Navigation = ({ className }) => {

	// BRING IN CONTEXT
	const panelContext = useContext(PanelContext);

	// SETUP REFS
	const navigationRef = useRef();

	// SETUP ROUTER
	const router = useRouter();

	// GET PATHNAME
	const pathname = usePathname();

	// GET PARAMS
	const params = useParams();

	// HANDLE SWITCH
	const handleSwitch = () => {
		panelContext.setNavigationIsOpen((value) => !value);
	};

	// HANDLE CLICK
	const handleClick = (event, target) => {
		event.preventDefault();
		router.push(target);
		panelContext.setNavigationIsOpen(false);
	};

	// TOGGLE NAVIGATION
	useEffect(() => {
		if (panelContext.viewportWidth > 1000) {
			gsap.to('.navigation', { left: '0', duration: 0 });
		} else if (panelContext.navigationIsOpen) {
			gsap.to('.navigation', { left: '-0px', duration: 0 });
			console.log('here');
		} else {
			gsap.to('.navigation', { left: '-400px', duration: 0 });
		}
	}, [panelContext.navigationIsOpen, panelContext.viewportWidth]);

	// UPDATE NEWS
	useEffect(() => {

	}, [pathname, params]);

	// RENDER
	return (
		<nav className={ `${ className } navigation` } ref={ navigationRef }>
			{ pathname.startsWith('/news') ? (
				<div className="navigation__links links">
					<Anchor className="links__item" href="/news?id='nice'">news</Anchor>
				</div>
			) : null }
			{ pathname.startsWith('/flowers') ? (
				<div className="navigation__links links">
					<Anchor className="links__item" href="/flowers?id='saisonal'" onClick={ (event) => handleClick(event, '/flowers?id="saisonal"') }>Saisonal</Anchor>
					<Anchor className="links__item" href="/flowers?id='house-creations'" onClick={ (event) => handleClick(event, '/flowers?id="house-creations"') }>Haus-Kreationen</Anchor>
					<Anchor className="links__item" href="/flowers?id='weddings'" onClick={ (event) => handleClick(event, '/flowers?id="weddings"') }>Hochzeiten</Anchor>
					<Anchor className="links__item" href="/flowers?id='mourning'" onClick={ (event) => handleClick(event, '/flowers?id="mourning"') }>Trauer</Anchor>
				</div>
			) : null }
			<div className="navigation__switch switch" onClick={ handleSwitch }>
				<span className="switch__line" />
				<span className="switch__line" />
				<span className="switch__line" />
			</div>
		</nav>
	);

};

// EXPORTS
export default Navigation;
