import PropTypes from 'prop-types';

const SubmitButton = ({ className, children, disabled }) => {

	return (
		<input className={ `${ className } submit-button` } type="submit" value={ children } disabled={ disabled } />
	);

};

SubmitButton.propTypes = {
	className: PropTypes.string,
	children: PropTypes.string,
	disabled: PropTypes.bool,
};

SubmitButton.defaultProps = {
	className: '',
	children: 'Senden',
	disabled: false,
};

export default SubmitButton;
