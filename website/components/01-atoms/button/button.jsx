import PropTypes from 'prop-types';

const Button = ({ className = '', children = null, onClick = null }) => {

	return (
		<button className={ ` ${ className } button` } type="button" onClick={ onClick }>
			{ children }
		</button>
	);

};

Button.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
};

export default Button;
