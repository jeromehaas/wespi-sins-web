'use client';

// IMPORTS
import Anchor from 'components/01-atoms/anchor/anchor';
import { gsap } from 'gsap';
import { useRef, useState, useEffect, useContext, Fragment } from 'react';
import { PanelContext } from 'contexts/panel-context';
import { usePathname, useParams, useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getMessagesQuery } from 'queries/messages/index.js';
import { getNewsQuery } from 'queries/news/index.js';
import getOrdersQuery from 'queries/orders/get-orders-query';
import moment from 'moment';
import Action from 'components/01-atoms/action/action';

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

	// GET MESSAGE
	const messages = useQuery({
		queryKey: ['messages'],
		queryFn: () => getMessagesQuery(),
		initialData: [],
	});

	// GET NEWS
	const news = useQuery({
		queryKey: ['news'],
		queryFn: () => getNewsQuery(),
		initialData: [],
	});

	const orders = useQuery({
		queryKey: ['orders'],
		queryFn: () => getOrdersQuery(),
		initialData: [],
	});

	// HANDLE SWITCH
	const handleSwitch = () => {
		panelContext.setNavigationIsOpen((value) => !value);
	};

	// HANDLE BACK
	const handleBack = () => {
		router.push('/');
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
		} else {
			gsap.to('.navigation', { left: '-400px', duration: 0 });
		}
	}, [panelContext.navigationIsOpen, panelContext.viewportWidth]);

	// RENDER
	return (
		<nav className={ `${ className } navigation` } ref={ navigationRef }>
			<Action className="navigation__link" onClick={ handleBack } symbol="chevron-left">zurück</Action>
			{ pathname.startsWith('/news') ? (
				<div className="navigation__links links">
					{ news.data?.map((item) => (
						<Anchor className="links__item" href={ `/news/${ item.id }` } key={ item.id }>{ item.attributes?.heading }</Anchor>
					))}
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
			{ pathname.startsWith('/messages') ? (
				<div className="navigation__links links">
					{ messages.data?.map((item) => (
						<Anchor className="links__item" href={ `/messages/${ item.id }` } key={ item.id } onClick={ (event) => handleClick(event, `/messages/${ item.id }`) }>{ item.attributes.subject }</Anchor>
					))}
				</div>
			) : null }
			{ pathname.startsWith('/orders') ? (
				<div className="navigation__links links">
					{ orders.data?.map((item) => (
						<Anchor className="links__item" href={ `/orders/${ item.id }` } key={ item.id } onClick={ (event) => handleClick(event, `/orders/${ item.id }`) }>Bestellung B{ item.id.toString().padStart(5, '0') } vom { moment(item.attributes.createdAt).format('YY.MM.DD') }</Anchor>
					))}
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
