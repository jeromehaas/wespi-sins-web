import PropTypes from 'prop-types';

const Paragraph = ({ className = '', children = null, onClick = null }) => {

	return (
		<p className={ ` ${ className } paragraph` } onClick={ onClick }>
			{ children }
		</p>
	);

};

Paragraph.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Paragraph;
