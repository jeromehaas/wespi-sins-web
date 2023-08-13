// IMPORTS
import { NextResponse } from 'next/server';

// GET NEXTRESPONSE METHODS
const { json } = NextResponse;

// GET METHOD
const GET = async (request) => {

	// TRY-CATCH BLOCK
	try {

		// GET BODY
		const id = request.nextUrl.searchParams.get('id');

		// IF ID IS IN PARAMS GET SPECIFIC MESSAGE
		if (id) {

			// GET MESSAGE
			const message = await

		} else {
		};

		return json(
			{ message: 'login was successfull', id: id },
			{ status: 200 },
		);

	// HANDLE ERRORS
	} catch (error) {

		// RETURN ERROR RESPONSE
		return json(
			{ message: error.message },
			{ status: 500 },
		);

	};

};

// EXPORTS
export {
	GET,
};
