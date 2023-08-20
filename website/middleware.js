import { NextResponse } from 'next/server';

// GET RESPONSE METHODS
const { next, redirect } = NextResponse;

// DEFINE PATH CATEGORIES
const websitePaths = ['/', '/flowers', '/stationery', '/about-us', '/contact', '/imprint', '/data-privacy'];
const authPaths = ['/login', '/admin-login'];

// MIDDLEWARE
export const middleware = async (request) => {

	try {

		// GET REQUESTED PATHNAME
		const { pathname } = request.nextUrl;

		// GET ENV VARIABLES
		const { APP_ENVIRONMENT: environment } = process.env;
		const { USER_LOGIN_TOKEN: userLoginToken } = process.env;

		// HANDLE AUTH PATHS
		if (authPaths.includes(pathname)) {

			// TRY-CATCH BLOCK
			try {

				// ON LOGIN PATHS ALWAYS SHOW SHITE
				return next();

			// HANDLE ERRORS
			} catch (error) {

				// ON LOGIN PATHS ALWAYS SHOW SHITE
				return next();

			};

		};

		// HANDLE WEBSITE PATHS
		if (websitePaths.includes(pathname)) {

			// TRY-CATCH BLOCK
			try {

				// LET PASS ALWAYS IN PRODUCTION
				if (environment === 'production') {
					return next();
				};

				// GET TOKEN OF COOKIE
				const cookie = request.cookies.get('wespi-user-token');

				// CHECK IF COOKIE IS AVAILABLE
				if (!cookie) throw new Error('no cookie found');

				// GET VALUE AND EXPIRY FROM COOKIE
				const value = JSON.parse(cookie.value);
				const expiry = value.expiry;
				const token = value.data;

				// CHECK IF COOKIE IS VALID
				const now = Math.floor(Date.now() / 1000);
				if (expiry < now) throw new Error('cookie is expired');

				// CHECK IF TOKEN IS AVAILABLE
				if (!token) throw new Error('token is not available');

				// IF TOKEN IS VALID LET USER PASS
				if (token !== userLoginToken) throw new Error('token is not valid');

				// IF TOKEN IS VALID LET USER PASS
				if (token === userLoginToken) {
					return next();
				};

			// HANDLE ERROS
			} catch (error) {

				// RETURN TO LOGIN PAGE
				return redirect(new URL('/login', request.url));

			};

		};

	// HANDLE ERRORS
	} catch (error) {

		// RETURN TO LOGIN PAGE
		return redirect(new URL('/login', request.url));

	};

};

// CONFIG
export const config = {

	// MATCHER
	matcher: [
		'/',
		'/flowers',
		'/stationery',
		'/about-us',
		'/contact',
		'/imprint',
		'/data-privacy',
		'/admin',
	],

};
