'use client';

import { createContext, useState, useMemo } from 'react';

// CREATE CONTEXT
const OrderContext = createContext();

// CREATE PROVIDER
const OrderProvider = ({ children }) => {

	const initialAddressValues = {
		'company': '',
		'firstname': '',
		'lastname': '',
		'phone': '',
		'email': '',
		'street': '',
		'town': '',
	};

	const initialPositionsValues = [
		{ 'article-description': '', 	'article-manufacturer': '', 'order-number': '', 'quantity': '' },
	];

	// DEFINE STATE
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [step, setStep] = useState(1);

	// GET DEFAULT POSITIONS VALUES
	const getDefaultPositionsValues = () => {
		const savedPositionsValues = localStorage.getItem('order-positions');
		const defaultPositionsValues = savedPositionsValues ? JSON.parse(savedPositionsValues) : initialPositionsValues;
		return defaultPositionsValues;
	};

	// GET DEFAULT POSITIONS VALUES
	const getDefaultAddressValues = () => {
		const savedAddressValues = localStorage.getItem('order-address');
		const defaultAddressValues = savedAddressValues ? JSON.parse(savedAddressValues) : initialAddressValues;
		return defaultAddressValues;
	};

	// STORE ADDRESS
	const storeAddress = (values) => {
		localStorage.setItem('order-address', JSON.stringify(values));
	};

	// STORE POSITIONS
	const storePositions = (values) => {
		localStorage.setItem('order-positions', JSON.stringify(values));
	};

	// RESET POSITIONS
	const resetPositions = () => {
		localStorage.removeItem('order-positions');
	};

	// MEMOIZE VALUES
	const value = useMemo(() => ({
		menuIsOpen,
		setMenuIsOpen,
		step,
		setStep,
		storeAddress,
		storePositions,
		resetPositions,
		getDefaultPositionsValues,
		getDefaultAddressValues,
	}), [menuIsOpen, step]);

	// RENDER
	return (

		<OrderContext.Provider value={ value }>
			{ children }
		</OrderContext.Provider>
	);

};

export {
	OrderContext,
	OrderProvider,
};
