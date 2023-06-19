import Paragraph from 'components/01-atoms/paragraph/paragraph';
import PropTypes from 'prop-types';

const TextArea = ({ className = '', id = '', label = '', placeholder = '', register = null, validation = null, error = null }) => {

	return (
		<div className={ `${ className } text-area ${ error ? 'text-area--error' : null }` }>
			<label className="text-area__label" htmlFor={ id }>{ `${ label }` }</label>
			<textarea className="text-area__input" placeholder={ placeholder } { ...register(id, validation) } rows={ 6 } />
			{ error && error.message ? <Paragraph className="text-area__error paragraph--small">{ error.message }</Paragraph> : null }
		</div>
	);

};

TextArea.propTypes = {
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

export default TextArea;
