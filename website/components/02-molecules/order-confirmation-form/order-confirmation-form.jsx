// IMPORTS
import { OrderContext } from 'contexts/order-context';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import Heading from 'components/01-atoms/heading/heading';
import Button from 'components/01-atoms/button/button';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Action from 'components/01-atoms/action/action';

// COMPONENT
const OrderConfirmationForm = ({ className }) => {

	// SETUP CONTEXT
	const orderContext = useContext(OrderContext);

	// BRING IN FORM
	const { getValues, reset } = useFormContext();

	// GET VALUES
	const { positions, address } = getValues();

	// HANDLE NEXT STEP
	const handleNextStep = () => {
		orderContext.setStep(4);
		orderContext.resetPositions();
		reset();
	};

	// HANDLE PREVIOUSS STEP
	const handlePreviousStep = () => {
		orderContext.setStep(2);
	};

	// HANDLE JUMP STEP
	const handleJumpStep = (index) => {
		orderContext.setStep(index);
	};

	// HANDLE CANCEL
	const handleCancel = () => {
		orderContext.setStep(0);
	};

	// RENDER
	return (
		<div className={ `${ className } order-confirmation-form` }>
			<Action className="order-confirmation-form__cancel-button" symbol="arrow-left" onClick={ handleCancel }>Bestellung abbrechen</Action>
			<div className="order-confirmation-form__form form">
				<Heading className="form__heading" level="h2">Bestellbestätigung</Heading>
				<div className="form__block block">
					<Heading className="block__heading" level="h4">Bestellübersicht</Heading>
					<div className="block__content content">
						<div className="content__order-list order-list">
							{ positions.map((position, index) => (
								<div className="order-list__row" key={ index }>
									<Paragraph className="order-list__item">{position['article-description']}</Paragraph>
									<Paragraph className="order-list__item">{position['article-manufacturer']}</Paragraph>
									<Paragraph className="order-list__item">{position['order-number']}</Paragraph>
									<Paragraph className="order-list__item">{position['quantity'] } Ex. </Paragraph>
								</div>
							))}
						</div>
						<Action className="content__action" onClick={ () => handleJumpStep(1) }>Bestellung ändern</Action>
					</div>
				</div>
				<div className="form__block block">
					<Heading className="block__heading" level="h4">Rechnungsadresse</Heading>
					<div className="block__content content">
						<div className="content__address">
							<Paragraph className="address__item">{address['company']}</Paragraph>
							<Paragraph className="address__item">{address['firstname']} {address['lastname']}</Paragraph>
							<Paragraph className="address__item">{address['street']}</Paragraph>
							<Paragraph className="address__item">{address['town']}</Paragraph>
						</div>
						<Action className="content__action" onClick={ () => handleJumpStep(2) }>Rechnungsadresse ändern</Action>
					</div>
				</div>
				<div className="form__block block">
					<Heading className="block__heading" level="h4">Bestellung abholen</Heading>
					<div className="block__content content">
						<div className="content__info">
							<Paragraph className="address__item">Sie werden von uns benachrichtigt, sobald Sie die Bestellung bei uns in Sins abholen können. </Paragraph>
						</div>
					</div>
				</div>
			</div>
			<div className="order-confirmation-form__actions actions">
				<Action className="actions__back-button" symbol="chevron-left" onClick={ handlePreviousStep }>zurück</Action>
				<Button className="actions__next-button" onClick={ handleNextStep }>Bestellung abschliessen</Button>
			</div>
		</div>
	);

};

// EXPORT
export default OrderConfirmationForm;
