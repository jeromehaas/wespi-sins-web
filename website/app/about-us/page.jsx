import AboutUsIntro from 'components/03-organisms/about-us-intro/about-us-intro';
import AboutUsSpeciality from 'components/03-organisms/about-us-speciality/about-us-speciality';
import Bee from 'components/03-organisms/bee/bee';
import AboutUsOwner from 'components/03-organisms/about-us-owner/about-us-owner';
import AboutUsQuote from 'components/03-organisms/about-us-quote/about-us-quote';
import AboutUsCta from 'components/03-organisms/about-us-cta/about-us-cta';
import AboutUsTeaserStore from 'components/03-organisms/about-us-teaser-store/about-us-teaser-store';

const Page = () => {

	return (
		<>
			<AboutUsIntro />
			<AboutUsSpeciality />
			<Bee />
			<AboutUsOwner />
			<AboutUsQuote />
			<AboutUsCta />
			<AboutUsTeaserStore />
		</>

	);

};

export default Page;
