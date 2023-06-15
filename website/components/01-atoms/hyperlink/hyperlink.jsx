import PropTypes from 'prop-types';

const HyperLink = ({ className = '', children = null, onClick = null }) => {

	return (
		<a className={ ` ${ className } hyperlink` } href="/" onClick={ onClick }>{ children }</a>
	);

};

HyperLink.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
};

export default HyperLink;
