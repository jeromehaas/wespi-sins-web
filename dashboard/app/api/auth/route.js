// IMPORTS
import { NextResponse } from 'next/server';

// GET NEXTRESPONSE MEHTODS
const { json } = NextResponse;

// LOGIN
const POST = async (request) => {

	// TRY-CATCH BLOCK
	try {

		// GET BODY
		const { username, password } = await request.json();
		if (!username) throw new Error('no username provided');
		if (!password) throw new Error('no password provided');

		// GET ENV VARIABLES
		const { ADMIN_LOGIN_USERNAME: adminLoginUsername } = process.env;
		const { ADMIN_LOGIN_PASSWORD: adminLoginPassword } = process.env;
		const { ADMIN_LOGIN_TOKEN: adminLoginToken } = process.env;
		if (!adminLoginUsername) throw new Error('admin-login-username is not defined');
		if (!adminLoginPassword) throw new Error('admin-login-password is not defined');
		if (!adminLoginToken) throw new Error('admin-login-token is not defined');

		// CHECK USERNAME AND PASSWORD
		if (username !== adminLoginUsername) throw new Error('username not valid');
		if (password !== adminLoginPassword) throw new Error('password not valid');

		// GENERATE TOKEN
		const token = {
			expiry: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
			data: adminLoginToken,
		};

		// RETURN
		return json(
			{ message: 'login was successfull', token: token },
			{ status: 200 },
		);

	// HANDLE ERRORS
	} catch (error) {

		// RETURN ERROR RESPONSE
		return json(
			{ message: error.message },
			{ status: 401 },
		);

	};

};

// EXPORTS
export {
	POST,
};
