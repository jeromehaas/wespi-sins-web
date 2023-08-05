// IMPORTS
import PropTypes from 'prop-types';
import Header from 'components/03-organisms/header/header';

// COMPONENT
const Panel = ({ className = '', children = null }) => {

	// RENDER
	return (
		<div className={ `${ className } panel` }>
			<Header />
			{ children }
		</div>
	);

};

// PROP-TYPES
Panel.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

// EXPORT
export default Panel;
