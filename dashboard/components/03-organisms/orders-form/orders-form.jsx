'use client';

// IMPORTS
import InputField from 'components/01-atoms/input-field/input-field';
import InputTable from 'components/01-atoms/input-table/input-table';
import Section from 'components/04-layouts/section/section';
import TextArea from 'components/01-atoms/text-area/text-area';
import { useForm } from 'react-hook-form';
import Button from 'components/01-atoms/button/button';
import { useParams, useRouter } from 'next/navigation';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getOrderQuery, deleteOrderQuery, updateOrderQuery } from 'queries/orders/index.js';
import { useEffect, Fragment } from 'react';
import Heading from 'components/01-atoms/heading/heading';

// RENDER
const OrdersForm = () => {

	// BRING IN REACT-HOOK-FORM
	const { register, formState, handleSubmit, getValues, reset, control, setValue } = useForm();

	// QUERY CLIENT
	const queryClient = useQueryClient();

	// GET PARAMS AND ROUTER
	const params = useParams();
	const router = useRouter();

	// DELETE MESSAGE
	const { mutate: deleteOrder } = useMutation({
		mutationKey: ['order'],
		mutationFn: deleteOrderQuery,
		onSuccess: () => { queryClient.invalidateQueries({ queryKey: 'orders' }); },
	});

	// HANDLE DELETE
	const handleDelete = ({ id }) => {

		// DELETE MESSAGE
		deleteOrder({ id });

		// REDIRECT TO PARENT ROUTE
		router.push('/orders');

	};

	// GET ORDER
	const order = useQuery({
		queryKey: ['order'],
		queryFn: () => getOrderQuery({ id: params.id }),
		initialData: {},
	});

	// UPDATE INPUTS WHEN ROUTE CHANGES
	useEffect(() => {
		setValue('order.address.company', order?.data?.attributes?.address.company);
		setValue('order.address.firstname', order?.data?.attributes?.address.firstname);
		setValue('order.address.lastname', order?.data?.attributes?.address.lastname);
		setValue('order.address.email', order?.data?.attributes?.address.email);
		setValue('order.address.phone', order?.data?.attributes?.address.phone);
		setValue('order.address.street', order?.data?.attributes?.address.street);
		setValue('order.address.town', order?.data?.attributes?.address.town);
		setValue('order.positions', order?.data?.attributes?.positions);
	}, [order]);

	return (
		<Section className="orders-form">
			<Heading className="orders-form__heading" level="h3">Bestellung</Heading>
			{ params.id ? (
				<form className="orders-form__form form">
					<fieldset className="form__group">
						<Heading className="form__heading" level="h2">Kontakt-Details</Heading>
						<InputField className="form__input-field" id="company" label="Firma" category="order.address" type="text" register={ register } error={ formState.errors['message'] } readOnly validation={ { 	required: { value: true, message: 'Bitte geben Sie den Firmennamen an' } } } />
						<InputField className="form__input-field" id="firstname" label="Vorname" category="order.address" type="text" register={ register } error={ formState.errors['message'] } readOnly validation={ { 	required: { value: true, message: 'Bitte geben Sie ihren Vornamen an' } } } />
						<InputField className="form__input-field" id="lastname" label="Nachname" category="order.address" type="text" register={ register } error={ formState.errors['message'] } readOnly validation={ { 	required: { value: true, message: 'Bitte geben Sie ihren Nachnamen an' } } } />
						<InputField className="form__input-field" id="email" label="E-Mail-Adresse" category="order.address" type="text" register={ register } error={ formState.errors['message'] } readOnly validation={ { 	required: { value: true, message: 'Bitte geben Sie ihre E-Mail-Adresse an' } } } />
						<InputField className="form__input-field" id="phone" label="Telefon-Nummer" category="order.address" type="text" register={ register } error={ formState.errors['message'] } readOnly validation={ { 	required: { value: true, message: 'Bitte geben Sie ihre Telefon-Nummer an' } } } />
						<InputField className="form__input-field" id="street" label="Strasse und Hausnummer" category="order.address" type="text" register={ register } error={ formState.errors['message'] } readOnly validation={ { 	required: { value: true, message: 'Bitte geben Sie einen Betreff an' } } } />
						<InputField className="form__input-field" id="town" label="PLZ, Ort" category="order.address" type="text" register={ register } error={ formState.errors['message'] } readOnly validation={ { 	required: { value: true, message: 'Bitte geben Sie einen Betreff an' } } } />
					</fieldset>
					<fieldset className="form__group">
						<Heading className="form__heading" level="h2">Positionen</Heading>
						<InputTable
							className="form__input"
							register={ register }
							category="order.positions"
							error={ formState.errors['order.positions'] }
							control={ control }
							formState={ formState }
							options={ [
								{ id: 'description', label: 'Artikelbezeichnung', placeholder: 'Artikelbezeichnung', defaultValue: '', validation: { required: { value: true, message: 'Bitte geben Sie die Artikelbezeichnung an' } }, type: 'text' },
								{ id: 'manufacturer', label: 'Artikelhersteller', placeholder: 'Artikelhersteller', defaultValue: '', validation: { 	required: { value: true, message: 'Bitte geben Sie den Artikelhersteller an' } }, type: 'text' },
								{ id: 'serial', label: 'Bestellnummer', placeholder: 'Bestellnummer', defaultValue: '', validation: { 	required: { value: true, message: 'Bitte geben Sie die Bestellnummer an' } }, type: 'text' },
								{ id: 'quantity', label: 'Anzahl', placeholder: '1', defaultValue: '', validation: { required: { value: true, message: 'Bitte geben Sie die Anzahl an' } }, type: 'text' },
							] }
						/>
					</fieldset>
					<div className="form__actions actions">
						<Fragment>
							<Button className="actions__item item" onClick={ () => handleDelete({ id: params.id }) }>Bestellung löschen</Button>
						</Fragment>
					</div>
				</form>
			) : null }
		</Section>
	);

};

// EXPORTS
export default OrdersForm;
