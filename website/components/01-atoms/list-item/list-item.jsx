import PropTypes from 'prop-types';

const ListItem = ({ className = '', children = null }) => {

	return (
		<p className={ ` ${ className } list-item` }>
			{ children }
		</p>
	);

};

ListItem.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default ListItem;
