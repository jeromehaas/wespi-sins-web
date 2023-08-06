// IMPORTS
import PropTypes from 'prop-types';
import Header from 'components/03-organisms/header/header';
import Section from 'components/04-layouts/section/section';

// COMPONENT
const Blank = ({ className = '', children = null }) => {

	// RENDER
	return (
		<div className={ `${ className } blank` }>
			<div className="blank__content">
				{ children }
			</div>
		</div>
	);

};

// PROP-TYPES
Blank.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

// EXPORT
export default Blank;
