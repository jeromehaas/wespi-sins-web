// IMPORTS
import Panel from 'components/04-layouts/panel/panel';
import { Fragment } from 'react';

// META DESCRIPTION
const metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_BASE_URL),
	title: 'Admin | Papeterie- und Bluemeparadies Wespi',
};

// LAYOUT
const RootLayout = ({ children }) => {

	// RENDER
	return (
		<Fragment>
			<Panel>
				{children}
			</Panel>
		</Fragment>
	);

};

// EXPORT
export { metadata };
export default RootLayout;
