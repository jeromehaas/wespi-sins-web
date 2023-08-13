'use client';

// IMPORTS
import InputField from 'components/01-atoms/input-field/input-field';
import Section from 'components/04-layouts/section/section';
import TextArea from 'components/01-atoms/text-area/text-area';
import { useForm } from 'react-hook-form';
import Button from 'components/01-atoms/button/button';
import { useParams, useRouter } from 'next/navigation';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { createNewQuery, getNewQuery, getNewsQuery, updateNewQuery, deleteNewQuery } from 'queries/news/index.js';
import { useEffect, Fragment } from 'react';
import Heading from 'components/01-atoms/heading/heading';

// RENDER
const NewsForm = () => {

	// BRING IN REACT-HOOK-FORM
	const { register, formState, handleSubmit, getValues, reset, setValue } = useForm();

	// QUERY CLIENT
	const queryClient = useQueryClient();

	// GET PARAMS AND ROUTER
	const params = useParams();
	const router = useRouter();

	// GET NEWS
	const news = useQuery({
		queryKey: ['new'],
		queryFn: () => getNewQuery({ id: params.id }),
		initialData: {},
	});

	// CREATE NEW
	const { mutateAsync: createNew } = useMutation({
		mutationKey: ['new'],
		mutationFn: createNewQuery,
		onSuccess: () => { queryClient.invalidateQueries({ queryKey: 'news' }); },
	});

	// DELETE NEW
	const { mutate: deleteNew } = useMutation({
		mutationKey: ['new'],
		mutationFn: deleteNewQuery,
		onSuccess: () => { queryClient.invalidateQueries({ queryKey: 'news' }); },
	});

	// UPDATE NEW
	const { mutate: updateNew } = useMutation({
		mutationKey: ['new'],
		mutationFn: updateNewQuery,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: 'news' });
			queryClient.invalidateQueries({ queryKey: 'new' });
		},
	});

	// HANDLE CREATE
	const handleCreate = async () => {

		// GET FORM VALUES
		const values = getValues();

		// GET DATA
		const input = {
			heading: values.news.heading,
			text: values.news.text,
		};

		// UPDATE NEW
		const response = await createNew({ input });

		// GET IF OF NEW CREATED NEW
		const { id } = response;

		// REDIRECT TO NEW NEW
		router.push(`/news/${ id }`);

	};

	// HANDLE UPDATE
	const handleUpdate = ({ id }) => {

		// GET FORM VALUES
		const values = getValues();

		// GET DATA
		const input = {
			heading: values.news.heading,
			text: values.news.text,
		};

		// UPDATE NEW
		updateNew({ id, input });

	};

	// HANDLE DELETE
	const handleDelete = ({ id }) => {

		// DELETE MESSAGE
		deleteNew({ id });

		// REDIRECT TO PARENT ROUTE
		router.push('/news');

	};

	// UPDATE INPUTS WHEN ROUTE CHANGES
	useEffect(() => {
		setValue('news.heading', news?.data?.attributes?.heading);
		setValue('news.text', news?.data?.attributes?.text);
	}, [news]);

	return (
		<Section className="news-form">
			<Heading className="orders-form__heading" level="h3">Neuigkeit</Heading>
			<form className="news-form__form form">
				<InputField className="form__input-field" id="heading" label="Titel" category="news" type="text" register={ register } error={ formState.errors['news'] } validation={ { 	required: { value: true, message: 'Bitte geben Sie einen Titel an' } } } />
				<TextArea className="form__input-field" id="text" label="Text" category="news" type="text" register={ register } error={ formState.errors['news'] } validation={ { 	required: { value: true, message: 'Bitte verfassen Sie eine Beschreibung' } } } />
				<div className="form__actions actions">
					{ params.id ? (
						<Fragment>
							<Button className="actions__item item" onClick={ () => handleDelete({ id: params.id }) }>Neuigkeit löschen</Button>
							<Button className="actions__item item" onClick={ () => handleUpdate({ id: params.id }) }>Neuigkeit aktualisieren</Button>
						</Fragment>
					) : (
						<Fragment>
							<Button className="actions__item item" onClick={ () => handleCreate({ id: params.id }) }>Neuigkeit erstellen</Button>
						</Fragment>
					) }
				</div>
			</form>
		</Section>
	);

};

// EXPORTS
export default NewsForm;
