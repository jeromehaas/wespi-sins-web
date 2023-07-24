// IMPORTS
import Website from 'components/04-layouts/website/website';
import { Fragment } from 'react';

// META DESCRIPTION
const metadata = {
	title: 'Papeterie- und Bluemeparadies Wespi',
	description: 'Seit Jahren mit viel Herzblut und Leidenschaft für Sie da. Ob im Alltag, an Hochzeiten, zu Trauer- oder Geburtstagsfesten – wir erfüllen saisonale Blumenwünsche. Zu Blumen gehört oft eine Karte und dazu braucht es natürlich einen toller Stift.',
	openGraph: {
		title: 'Papeterie- und Bluemeparadies Wespi',
		description: 'Seit Jahren mit viel Herzblut und Leidenschaft für Sie da. Ob im Alltag, an Hochzeiten, zu Trauer- oder Geburtstagsfesten – wir erfüllen saisonale Blumenwünsche. Zu Blumen gehört oft eine Karte und dazu braucht es natürlich einen toller Stift.',
		url: 'https://wespi-sins.ch',
		siteName: 'Next.js',
		images: [{ url: 'https://cms.wespi-sins.ch/admin/70674f63fc3904c20de0.svg', width: 800, height: 600 }],
		locale: 'de-ch',
		type: 'website',
	},
};

// LAYOUT
const RootLayout = ({ children }) => {

	// RENDER
	return (
		<Fragment>
			<Website>
				{children}
			</Website>
		</Fragment>
	);

};

// EXPORT
export { metadata };
export default RootLayout;
