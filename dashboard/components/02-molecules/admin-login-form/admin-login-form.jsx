'use client';

// IMPORTS
import InputField from 'components/01-atoms/input-field/input-field';
import Image from 'next/image';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import SubmitButton from 'components/01-atoms/submit-button/submit-button';
import axios from 'axios';
import { gsap } from 'gsap';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';
import { useForm } from 'react-hook-form';

// COMPONENT
const AdminLoginForm = ({ className }) => {

	// SETUP REFS
	const adminLoginFormRef = useRef();
	const toastTimelineRef = useRef();

	// SETUP TOAST STATE
	const [toast, setToast] = useState({
		status: 'hidden',
		message: '',
	});

	// BRING IN REACT-HOOK-FORM
	const { register, formState, handleSubmit, getValues, reset } = useForm();

	// SETUP ROUTER
	const router = useRouter();

	// VALIDATE INPUT
	const validateInput = async () => {

		try {

			const { login } = getValues();

			// SEND REQUEST
			const response = await axios({
				method: 'POST',
				url: '/api/auth',
				data: { username: login.username, password: login.password },
			});

			// GET TOKEN
			const { token } = response.data;

			// ON SUCCESS
			if (token) {

				// SET COOKIE
				setCookie('wespi-admin-token', token);

				// REDIRECT ADMIN
				router.push('/admin');

			};

		// HANDLE ERRORS
		} catch (error) {

			// RESET PASSWORD FIELD
			reset({ login: { password: '' } });

			// SHOW TOAST
			setToast({ status: 'error', message: 'Die Zugangsdaten sind nicht korrekt.' });

		};

	};

	// UPDATE TOAST
	useEffect(() => {
		if (toast.status === 'hidden') return;
		const context = gsap.context(() => {
			toastTimelineRef.current = gsap.timeline();
			toastTimelineRef.current.to('.admin-login-form .toast', { bottom: 'calc(0% + 32px)', duration: 1 }, 0);
			toastTimelineRef.current.to('.admin-login-form .toast .toast__progress .progress__status', { right: '0%', duration: 4 }, 1);
			toastTimelineRef.current.to('.admin-login-form .toast .toast__progress .progress__status', { left: '100%', duration: 1 }, 5);
			toastTimelineRef.current.to('.admin-login-form .toast', { bottom: '-240px', duration: 1 }, 7);
		}, adminLoginFormRef);
		return () => { return context.revert(); };
	}, [toast]);

	// RENDER
	return (
		<div className={ `${ className } admin-login-form` } ref={ adminLoginFormRef }>
			<Image className="admin-login-form__logo" src="/logos/logo-wespi-sins-bw-full.svg" width="160" height="160" alt="Wespi Sins Papeterie und Bluemeparadies" priority />
			<form className="admin-login-form__form form" onSubmit={ handleSubmit(validateInput) }>
				<InputField className="form__input-field" id="username" label="Benutzername" placeholder="Ihr Benutzername" category="login" type="text" register={ register } error={ formState.errors['login'] } validation={ { 	required: { value: true, message: 'Bitte geben Sie Ihren Benutzernamen an' } } } />
				<InputField className="form__input-field" id="password" label="Password" placeholder="Ihr Passwort" category="login" type="password" register={ register } error={ formState.errors['login'] } validation={ { 	required: { value: true, message: 'Bitte geben Sie Ihr Passwort ein' } } } />
				<SubmitButton className="form__submit-button" onClick={ handleSubmit(validateInput) }>Anmelden</SubmitButton>
			</form>
			<div className="admin-login-form__toast toast">
				<div className="toast__content content">
					{ toast && toast.status === 'success' ? (
						<svg className="content__icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.9285 7.74652L9.5235 15.2296L7.69096 12.4541" stroke="#9E453E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<circle cx="11" cy="11" r="10" stroke="#9E453E" strokeWidth="2" />
						</svg>
					) : null }
					{ toast && toast.status === 'error' ? (
						<svg className="content__icon" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.7991 9.14208L9.14228 14.7989M9.14228 9.14208L14.7991 14.7989M19.0418 19.0416C15.1365 22.9468 8.80488 22.9468 4.89964 19.0416C0.994392 15.1363 0.994392 8.80468 4.89964 4.89944C8.80488 0.994194 15.1365 0.994194 19.0418 4.89944C22.947 8.80468 22.947 15.1363 19.0418 19.0416Z" stroke="#9E453E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					) : null }
					<Paragraph className="content__message">{ toast.message }</Paragraph>
				</div>
				<div className="toast__progress progress">
					<figure className="progress__background" />
					<figure className="progress__status" />
				</div>
			</div>
		</div>
	);

};

// EXPORT
export default AdminLoginForm;
