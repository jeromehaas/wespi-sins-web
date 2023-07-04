import PropTypes from 'prop-types';

const HyperLink = ({ className = '', children = null, onClick = null, href = '/' }) => {

	return (
		<a className={ ` ${ className } hyperlink` } href={ href } onClick={ onClick }>{ children }</a>
	);

};

HyperLink.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
};

export default HyperLink;
