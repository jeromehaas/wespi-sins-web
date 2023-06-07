import Link from 'next/link';
import PropTypes from 'prop-types';

const Button = ({ className, children, href, onClick }) => {

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

Button.defaultProps = {
	className: '',
	href: '#',
	onClick: null,
};

export default Button;
