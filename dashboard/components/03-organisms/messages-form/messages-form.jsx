'use client';

// IMPORTS
import InputField from 'components/01-atoms/input-field/input-field';
import Section from 'components/04-layouts/section/section';
import TextArea from 'components/01-atoms/text-area/text-area';
import { useForm } from 'react-hook-form';
import Button from 'components/01-atoms/button/button';
import { useParams, useRouter } from 'next/navigation';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getMessageQuery, deleteMessageQuery } from 'queries/messages/index.js';
import { useEffect, Fragment } from 'react';
import Heading from 'components/01-atoms/heading/heading';

// RENDER
const MessagesForm = () => {

	// BRING IN REACT-HOOK-FORM
	const { register, formState, handleSubmit, getValues, reset, setValue } = useForm();

	// QUERY CLIENT
	const queryClient = useQueryClient();

	// GET PARAMS AND ROUTER
	const params = useParams();
	const router = useRouter();

	// DELETE MESSAGE
	const { mutate: deleteMessage } = useMutation({
		mutationKey: ['message'],
		mutationFn: deleteMessageQuery,
		onSuccess: () => { queryClient.invalidateQueries({ queryKey: 'messages' }); },
	});

	// HANDLE DELETE
	const handleDelete = ({ id }) => {

		// DELETE MESSAGE
		deleteMessage({ id });

		// REDIRECT TO PARENT ROUTE
		router.push('/messages');

	};

	// GET NEWS
	const message = useQuery({
		queryKey: ['message'],
		queryFn: () => getMessageQuery({ id: params.id }),
		initialData: {},
	});

	// UPDATE INPUTS WHEN ROUTE CHANGES
	useEffect(() => {
		setValue('message.company', message?.data?.attributes?.company);
		setValue('message.firstname', message?.data?.attributes?.firstname);
		setValue('message.lastname', message?.data?.attributes?.lastname);
		setValue('message.email', message?.data?.attributes?.email);
		setValue('message.phone', message?.data?.attributes?.phone);
		setValue('message.subject', message?.data?.attributes?.subject);
		setValue('message.content', message?.data?.attributes?.content);
	}, [message]);

	return (
		<Section className="messages-form">
			<Heading className="orders-form__heading" level="h3">Nachricht</Heading>
			{ params.id ? (
				<form className="messages-form__form form">
					<fieldset className="form__group">
						<InputField className="form__input-field" id="company" label="Firma" category="message" type="text" register={ register } error={ formState.errors['message'] } readOnly validation={ { 	required: { value: true, message: 'Bitte geben Sie den Firmennamen an' } } } />
						<InputField className="form__input-field" id="firstname" label="Vorname" category="message" type="text" register={ register } error={ formState.errors['message'] } readOnly validation={ { 	required: { value: true, message: 'Bitte geben Sie ihren Vornamen an' } } } />
						<InputField className="form__input-field" id="lastname" label="Nachname" category="message" type="text" register={ register } error={ formState.errors['message'] } readOnly validation={ { 	required: { value: true, message: 'Bitte geben Sie ihren Nachnamen an' } } } />
						<InputField className="form__input-field" id="email" label="E-Mail-Adresse" category="message" type="text" register={ register } error={ formState.errors['message'] } readOnly validation={ { 	required: { value: true, message: 'Bitte geben Sie ihre E-Mail-Adresse an' } } } />
						<InputField className="form__input-field" id="phone" label="Telefon-Nummer" category="message" type="text" register={ register } error={ formState.errors['message'] } readOnly validation={ { 	required: { value: true, message: 'Bitte geben Sie ihre Telefon-Nummer an' } } } />
						<InputField className="form__input-field" id="subject" label="Betreff" category="message" type="text" register={ register } error={ formState.errors['message'] } readOnly validation={ { 	required: { value: true, message: 'Bitte geben Sie einen Betreff an' } } } />
						<TextArea className="form__input-field" id="content" label="Beschreibung*" category="message" type="text" register={ register } error={ formState.errors['message'] } validation={ { 	required: { value: true, message: 'Bitte verfassen Sie eine Nachricht' } } } />
					</fieldset>
					<div className="form__actions actions">
						<Fragment>
							<Button className="actions__item item" onClick={ () => handleDelete({ id: params.id }) }>Neuigkeit löschen</Button>
						</Fragment>
					</div>
				</form>
			) : null }
		</Section>
	);

};

// EXPORTS
export default MessagesForm;
