// IMPORTS
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import PropTypes from 'prop-types';

// COMPONENT
const InputField = ({ className = '', category = '', info = '', id = '', label = '', placeholder = '', type = 'text', register = null, validation = null, error = null, defaultValue = null }) => {

	// RENDER
	return (
		<div className={ `${ className } input-field ${ error && error[id] ? 'input-field--error' : null }` }>
			<label className="input-field__label" htmlFor={ id }>{ `${ label }` }</label>
			<input className="input-field__input" id={ id } type={ type } placeholder={ placeholder } { ...register(`${ category }.${ id }`, validation) } defaultValue={ defaultValue } />
			{ error && error[id] && error[id].message ? <Paragraph className="input-field__error paragraph--small">{ error[id].message }</Paragraph> : null }
			{ info
				? (
					<div className="input-filed__info info">
						<figure className="info__symbol paragraph paragraph--small">?</figure>
						<Paragraph className="info__text paragraph paragraph--small">{ info }</Paragraph>
					</div>
				) : null }
		</div>
	);

};

// PROP-TYPES
InputField.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string.isRequired,
	info: PropTypes.string,
	category: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	isRequired: PropTypes.bool,
	placeholder: PropTypes.string.isRequired,
	defautlValue: PropTypes.string,
	register: PropTypes.func.isRequired,
	errorText: PropTypes.string,
	errors: PropTypes.shape({
		id: PropTypes.shape({
			message: PropTypes.string,
		}),
	}),
};

// EXPORT
export default InputField;
