// IMPORTS
import 'styles/main.scss';
import { Fragment } from 'react';
import Dashboard from 'components/04-layouts/dashboard/dashboard';

// LAYOUT
const RootLayout = ({ children }) => {

	return (
		<Fragment>
			<Dashboard>
				Admin-Zone
				{ children }
			</Dashboard>
		</Fragment>
	);

};

// EXPORT
export default RootLayout;
