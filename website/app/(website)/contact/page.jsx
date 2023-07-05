import ContactIntro from 'components/03-organisms/contact-intro/contact-intro';
import ContactDetails from 'components/03-organisms/contact-info/contact-info';
import ContactGuide from 'components/03-organisms/contact-guide/contact-guide';
import ContactLocation from 'components/03-organisms/contact-location/contact-location';
import ContactContactForm from 'components/03-organisms/contact-contact-form/contact-contact-form';

const Page = () => {

	return (
		<>
			<ContactIntro />
			<ContactDetails />
			<ContactGuide />
			<ContactContactForm />
			<ContactLocation />
		</>

	);

};

export default Page;
