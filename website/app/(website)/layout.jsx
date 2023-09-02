// IMPORTS
import Website from 'components/04-layouts/website/website';
import { Fragment } from 'react';

// META DESCRIPTION
const metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_BASE_URL),
	title: 'Papeterie- und Bluemeparadies Wespi',
	description: 'Seit Jahren mit viel Herzblut und Leidenschaft für Sie da. Ob im Alltag, an Hochzeiten, zu Trauer- oder Geburtstagsfesten – wir erfüllen saisonale Blumenwünsche. Zu Blumen gehört oft eine Karte und dazu braucht es natürlich einen toller Stift.',
	openGraph: {
		title: 'Papeterie- und Bluemeparadies Wespi',
		description: 'Seit Jahren mit viel Herzblut und Leidenschaft für Sie da. Ob im Alltag, an Hochzeiten, zu Trauer- oder Geburtstagsfesten – wir erfüllen saisonale Blumenwünsche. Zu Blumen gehört oft eine Karte und dazu braucht es natürlich einen toller Stift.',
		url: 'https://wespi-sins.ch',
		siteName: 'Papeterie- und Bluemeparadies Wespi',
		images: [{ url: 'https://wespi-sins-web-development.fra1.digitaloceanspaces.com/general_claudia_wespi_a2fc02ddab.webp', width: 800, height: 600 }],
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
