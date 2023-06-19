import Section from 'components/04-layouts/section/section';
import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import ContactForm from 'components/02-molecules/contact-form/contact-form';

const ContactContactForm = () => {

	return (
		<Section className="contact-contact-form">
			<Heading className="contact-contact-form__heading" level="h2">Wir freuen uns auf ihre Nachricht</Heading>
			<Paragraph className="contact-contact-form__text">Sie möchten gerne bei uns etwas bestellen, haben eine Frage oder möchten sonst mit uns Kontakt aufnehmen? Schreiben Sie uns!</Paragraph>
			<ContactForm className="contact-contact-form__contact-form" />
		</Section>
	);

};

export default ContactContactForm;
