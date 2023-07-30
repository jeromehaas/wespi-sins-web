// IMPORTS
import AdminLogin from 'components/03-organisms/admin-login/admin-login';
import { Fragment } from 'react';

// META DESCRIPTION
const metadata = {
	title: 'Login | Papeterie- und Bluemeparadies Wespi',
};

// PAGE
const Page = () => {

	// RENDER
	return (
		<Fragment>
			<AdminLogin />
		</Fragment>
	);

};

// EXPORT
export { metadata };
export default Page;
