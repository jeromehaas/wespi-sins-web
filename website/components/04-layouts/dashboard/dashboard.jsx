// IMPORTS
import PropTypes from 'prop-types';

// COMPONENT
const Dashboard = ({ className = '', children = null }) => {

	// RENDER
	return (
		<div className={ `${ className } dashboard` }>
			{/* <DesktopNavigation /> */}
			{/* <MobileNavigation /> */}
			{ children }
			hows it going young man?
			{/* <OpeningTimes /> */}
			{/* <Footer /> */}
			{/* <Order /> */}
			{/* <Grid /> */}
		</div>
	);

};

// PROP-TYPES
Dashboard.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

// EXPORT
export default Dashboard;
