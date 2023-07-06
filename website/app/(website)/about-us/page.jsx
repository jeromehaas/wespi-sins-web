// IMPORTS
import { Fragment } from 'react';
import AboutUsIntro from 'components/03-organisms/about-us-intro/about-us-intro';
import AboutUsSpeciality from 'components/03-organisms/about-us-speciality/about-us-speciality';
import AboutUsBeeAction from 'components/03-organisms/about-us-bee-action/about-us-bee-action';
import AboutUsOwner from 'components/03-organisms/about-us-owner/about-us-owner';
import AboutUsQuote from 'components/03-organisms/about-us-quote/about-us-quote';
import AboutUsCta from 'components/03-organisms/about-us-cta/about-us-cta';
import AboutUsTeaserStore from 'components/03-organisms/about-us-teaser-store/about-us-teaser-store';

// PAGE
const Page = () => {

	// RENDER
	return (
		<Fragment>
			<AboutUsIntro />
			<AboutUsSpeciality />
			<AboutUsBeeAction />
			<AboutUsOwner />
			<AboutUsQuote />
			<AboutUsCta />
			<AboutUsTeaserStore />
		</Fragment>
	);

};

// EXPORT
export default Page;
