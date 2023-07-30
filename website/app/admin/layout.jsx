// IMPORTS
import 'styles/main.scss';
import { Fragment } from 'react';

// LAYOUT
const RootLayout = ({ children }) => {

	return (
		<Fragment>
			Admin-Zone
			{ children }
		</Fragment>
	);

};

// EXPORT
export default RootLayout;
