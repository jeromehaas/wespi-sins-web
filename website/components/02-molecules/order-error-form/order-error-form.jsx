'use client';

// IMPORTS
import Heading from 'components/01-atoms/heading/heading';
import Button from 'components/01-atoms/button/button';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import { OrderContext } from 'contexts/order-context';
import { useContext } from 'react';

// COMOPNENT
const OrderErrorForm = ({ className }) => {

	// SETUP CONTEXT
	const orderContext = useContext(OrderContext);

	// HANDLE CLOSE MENU
	const handleCloseMenu = () => {
		orderContext.setMenuIsOpen(false);
	};

	// RENDER
	return (
		<div className={ `${ className} order-error-form` }>
			<div className="order-error-form__form form">
				<Heading className="form__heading" level="h2">Etwas ist schief gelaufen</Heading>
				<Paragraph className="form__text">Wir bitten Sie um Verzeihung, die Bestellung konnte nicht abgeschickt werden. Bitte nehmen Sie via E-Mail oder Telefon mit uns Kontakt auf.</Paragraph>
			</div>
			<div className="order-success-form__actions actions">
				<Button className="actions__back-button" onClick={ handleCloseMenu }>Zurück zur Website</Button>
			</div>
		</div>
	);

};

// EXPORT
export default OrderErrorForm;
