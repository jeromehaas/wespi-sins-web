// IMPORTS
import PropTypes from 'prop-types';

// COMPONENT
const ListItem = ({ className = '', children = null }) => {

	// RENDER
	return (
		<li className={ ` ${ className } list-item` }>
			- { children }
		</li>
	);

};

// PROP-TYPES
ListItem.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

// EXPORT
export default ListItem;
