import Paragraph from 'components/01-atoms/paragraph/paragraph';
import PropTypes from 'prop-types';

const InputField = ({ className = '', id = '', label = '', placeholder = '', type = '', register = null, validation = null, isRequired = false, errorText = '', errors = [] }) => {

	return (
		<div className={ `${ className } input-field ${ errors && errors[id] ? 'input-field--error' : null }` }>
			<label className="input-field__label" htmlFor={ id }>{ `${ label }${ isRequired ? '*' : '' }` }</label>
			<input className="input-field__input" type={ type } placeholder={ placeholder } { ...(register ? register(id, validation) : {}) } />
			{ errors && errors[id] && errorText ? <Paragraph className="input-field__error paragraph--small">{ errorText }</Paragraph> : null }
		</div>
	);

};

InputField.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	isRequired: PropTypes.bool,
	placeholder: PropTypes.string.isRequired,
	register: PropTypes.func.isRequired,
	errorText: PropTypes.string,
	errors: PropTypes.shape({
		id: PropTypes.shape({
			message: PropTypes.string,
		}),
	}),
};

export default InputField;
