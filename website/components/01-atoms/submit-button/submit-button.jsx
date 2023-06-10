import PropTypes from 'prop-types';

const SubmitButton = ({ className = '', children = null, disabled = false }) => {

	return (
		<input className={ `${ className } submit-button` } type="submit" value={ children } disabled={ disabled } />
	);

};

SubmitButton.propTypes = {
	className: PropTypes.string,
	children: PropTypes.string,
	disabled: PropTypes.bool,
};

export default SubmitButton;
