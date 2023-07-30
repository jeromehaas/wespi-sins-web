// IMPORTS
import { NextResponse } from 'next/server';

// GET NEXTRESPONSE MEHTODS
const { json } = NextResponse;

// LOGIN
const POST = async (request) => {

	// TRY-CATCH BLOCK
	try {

		// GET BODY
		const { pin } = await request.json();
		if (!pin) throw new Error('no pin provided');

		// GET ENV VARIABLES
		const { USER_LOGIN_PIN: userLoginPin } = process.env;
		const { USER_LOGIN_TOKEN: userLoginToken } = process.env;
		if (!userLoginPin) throw new Error('user-login-pin is not defined');
		if (!userLoginToken) throw new Error('user-login-token is not defined');

		// CHECK PIN
		if (pin !== userLoginPin) throw new Error('user-login-pin is not valid');

		// GENERATE TOKEN
		const token = {
			expiry: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
			data: userLoginToken,
		};

		// RETURN SUCCESS RESPONSE
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
