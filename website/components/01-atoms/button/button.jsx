import PropTypes from 'prop-types';
import Link from 'next/link';
import { Fragment } from 'react';

const Button = ({ className = '', children = null, onClick = null, href = null, target = '_self' }) => {

	return (
		<Fragment>
			{ href !== null ? (
				<Link className={ `${ className } button` } href={ href } target={ target }>
					{ children }
				</Link>
			) : (
				<button className={ `${ className } button` } type="button" onClick={ onClick }>
					{ children }
				</button>
			)}
		</Fragment>
	);

};

Button.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
	target: PropTypes.string,
};

export default Button;
