'use client';

// IMPORTS
import InputField from 'components/01-atoms/input-field/input-field';
import InputImage from 'components/01-atoms/input-image/input-image';
import Section from 'components/04-layouts/section/section';
import TextArea from 'components/01-atoms/text-area/text-area';
import Button from 'components/01-atoms/button/button';
import { useForm } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getFlowerQuery, updateFlowerQuery } from 'queries/flowers/index.js';
import { useEffect, Fragment } from 'react';
import Heading from 'components/01-atoms/heading/heading';

// RENDER
const FlowersForm = () => {

	// BRING IN REACT-HOOK-FORM
	const { register, formState, handleSubmit, watch, getValues, reset, setValue } = useForm();

	// QUERY CLIENT
	const queryClient = useQueryClient();

	// GET PARAMS AND ROUTER
	const params = useParams();
	const router = useRouter();

	// GET VALUES
	const values = getValues();

	// GET FLOWER
	const flower = useQuery({
		queryKey: ['flower'],
		queryFn: () => getFlowerQuery({ id: params.id }),
	});

	// UPDATE FLOWER
	const { mutateAsync: updateFlower } = useMutation({
		mutationKey: ['flower'],
		mutationFn: updateFlowerQuery,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: 'flowers' });
			queryClient.invalidateQueries({ queryKey: 'flower' });
		},
	});

	// UPDATE INPUTS WHEN ROUTE CHANGES
	useEffect(() => {
		setValue('flower.heading', flower?.data?.attributes?.heading);
		setValue('flower.text', flower?.data?.attributes?.text);
	}, [flower]);

	// UPDATE INPUTS WHEN ROUTE CHANGES
	useEffect(() => {
		setValue('flower.cover.data', null);
		setValue('flower.cover.preview', null);
		return () => {
			setValue('flower.cover.data', null);
			setValue('flower.cover.preview', null);
		};
	}, [params.id]);

	// HANDLE CHANGE
	const handleChange = async (event) => {
		const file = event.target.files[0];
		const url = URL.createObjectURL(file);
		setValue('flower.cover.preview', url);
		setValue('flower.cover.data', event.target.files[0]);
	};

	// HANDLE UPDATE
	const handleUpdate = async ({ id }) => {

		// GET FORM VALUES
		const formValues = getValues();

		// OPEN SUBMISSION
		const input = new FormData();

		// APPEND DATA
		input.append('data', JSON.stringify({}));

		// APPEND COVER
		if (formValues.flower.cover.data) {
			input.append('files.cover', formValues.flower.cover.data);
		};

		// UPDATE FLOWER
		await updateFlower({ id, input });

	};

	// RENDER
	return (
		<Section className="flowers-form">
			<Heading className="flowers-form__heading" level="h3">Blumen</Heading>
			{ flower.data && params.id ? (
				<form className="flowers-form__form form">
					<fieldset className="form__group">
						<InputField className="form__input-field" id="heading" label="Titel" category="flower" type="text" register={ register } error={ formState.errors['flower'] } validation={ { 	required: { value: true, message: 'Bitte geben Sie einen Titel ein' } } } />
						<TextArea className="form__input-field" id="text" label="Text" category="flower" type="text" register={ register } error={ formState.errors['flower'] } readOnly validation={ { 	required: { value: true, message: 'Bitte verfassen Sie eine Beschreibung' } } } />
						<InputImage className="form__input-field" id="cover" label="Cover" category="flower" defaultValue={ flower?.data?.attributes?.cover?.data.attributes.url } value={ values?.flower?.cover.preview } register={ register } error={ formState.errors['flower'] } onChange={ (event) => handleChange(event) } validation={ { 	required: { value: true, message: 'Bitte wählen Sie ein Cover' } } } />
					</fieldset>
					<div className="form__actions actions">
						<Fragment>
							<Button className="actions__item item" onClick={ () => handleUpdate({ id: params.id }) }>Blumen aktualisieren</Button>
						</Fragment>
					</div>
				</form>
			) : null }
		</Section>
	);

};

// EXPORTS
export default FlowersForm;
