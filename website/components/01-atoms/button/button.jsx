import Link from 'next/link';
import PropTypes from 'prop-types';

const Button = ({ className = '', children = null, href = '#', onClick = null }) => {

	return (
		<Link className={ ` ${ className } button` } href={ href } onClick={ onClick }>
			{ children }
		</Link>
	);

};

Button.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	href: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
