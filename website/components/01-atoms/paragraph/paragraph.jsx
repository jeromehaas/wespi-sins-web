import PropTypes from 'prop-types';

const Paragraph = ({ className = '', children }) => {

	return (
		<p className={ ` ${ className } paragraph` }>
			{ children }
		</p>
	);

};

Paragraph.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Paragraph;
