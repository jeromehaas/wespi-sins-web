'use client';

// IMPORTS
import Panel from 'components/04-layouts/panel/panel';
import { Fragment } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

// META DESCRIPTION
// const metadata = {
// 	metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_BASE_URL),
// 	title: 'Admin | Papeterie- und Bluemeparadies Wespi',
// };

// SETUP QUERY CLIENT
const queryClient = new QueryClient();

// LAYOUT
const RootLayout = ({ children }) => {

	// RENDER
	return (
		<Fragment>
			<QueryClientProvider client={ queryClient }>
				<Panel>
					{children}
				</Panel>
			</QueryClientProvider>
		</Fragment>
	);

};

// EXPORT
// export { metadata };
export default RootLayout;
