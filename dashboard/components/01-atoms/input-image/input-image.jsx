// IMPORTS
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

// COMPONENT
const InputImage = ({ className = '', category = '', id = '', label = '', placeholder = '', register = null, validation = null, error = null, defaultValue = null, readOnly = false, value = null, onChange }) => {

	// RENDER
	return (
		<div className={ `${ className } input-image ${ error && error[id] ? 'input-image--error' : null }` }>
			<label className="input-image__label" htmlFor={ id }>{ `${ label }` }</label>
			<input className="input-image__input" id={ id } type="file" filename="Image" placeholder={ placeholder } { ...register(`${ category }.${ id }`, validation) } readOnly={ readOnly } onChange={ onChange } />
			<label className="input-image__preview preview" htmlFor={ id }>
				{ value
					? <Image className="preview__image" src={ value } fill alt="Image" />
					: <Image className="preview__image" src={ defaultValue } fill alt="Image" /> }
			</label>
			{/* { error && error[id] && error[id].message ? <Paragraph className="input-image__error paragraph--small">{ error[id].message }</Paragraph> : null } */}
		</div>
	);

};

// PROP-TYPES
InputImage.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	isRequired: PropTypes.bool,
	placeholder: PropTypes.string,
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
export default InputImage;
