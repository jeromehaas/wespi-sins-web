import PropTypes from 'prop-types';

const Website = ({ className, children }) => {

	return (
		<div className={ `${ className } website` }>
			{ children }
		</div>
	);

};

Website.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

Website.defaultProps = {
	className: '',
	children: null,
};

export default Website;
