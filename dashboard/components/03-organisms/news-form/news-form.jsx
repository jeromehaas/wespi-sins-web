'use client';

// IMPORTS
import InputField from 'components/01-atoms/input-field/input-field';
import Section from 'components/04-layouts/section/section';
import TextArea from 'components/01-atoms/text-area/text-area';
import { useForm } from 'react-hook-form';
import Button from 'components/01-atoms/button/button';
import { useParams } from 'next/navigation';
import { Fragment } from 'react';

// RENDER
const NewsForm = () => {

	// BRING IN REACT-HOOK-FORM
	const { register, formState, handleSubmit, getValues, reset } = useForm();

	// GET PARAMS
	const { event } = useParams();

	return (
		<Section className="news-form">
			<form className="news-form__form form">
				<InputField className="form__input-field" id="title" label="Titel*" placeholder="Geben Sie den Titel der Neuigkeit an" category="news" type="text" register={ register } error={ formState.errors['news'] } validation={ { 	required: { value: true, message: 'Bitte geben Sie den Titel der Neuigkeit an' } } } />
				<TextArea className="form__input-field" id="description" label="Beschreibung*" placeholder="Verfassen Sie eine Beschreibgun für die Neuigkeit" category="news" type="text" register={ register } error={ formState.errors['news'] } validation={ { 	required: { value: true, message: 'Bitte verfassen Sie eine Nachricht' } } } />
				<div className="form__actions actions">
					{ event ? (
						<Fragment>
							<Button className="actions__item item">Neuigkeit löschen</Button>
							<Button className="actions__item item">Neuigkeit aktualisieren</Button>
						</Fragment>
					) : (
						<Fragment>
							<Button className="actions__item item">Neuigkeit erstellen</Button>
						</Fragment>
					)}
				</div>
			</form>
		</Section>
	);

};

// EXPORTS
export default NewsForm;
