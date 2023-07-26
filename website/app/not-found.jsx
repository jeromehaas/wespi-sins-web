// IMPORTS
import { Fragment } from 'react';
import PageNotFoundIntro from 'components/03-organisms/page-not-found-intro/page-not-found-intro';
import PageNotFoundCta from 'components/03-organisms/page-not-found-cta/page-not-found-cta';
import MobileNavigation from 'components/03-organisms/mobile-navigation/mobile-navigation';
import DesktopNavigation from 'components/03-organisms/desktop-navigation/desktop-navigation';
import Footer from 'components/03-organisms/footer/footer';
import OpeningTimes from 'components/03-organisms/opening-times/opening-times';

// META DESCRIPTION
const metadata = {
	title: 'Page not found | Papeterie- und Bluemeparadies Wespi',
};

// PAGE
const Page = () => {

	// RENDER
	return (
		<Fragment>
			<MobileNavigation />
			<DesktopNavigation />
			<PageNotFoundIntro />
			<PageNotFoundCta />
			<OpeningTimes />
			<Footer />
		</Fragment>
	);

};

// EXPORT
export { metadata };
export default Page;
