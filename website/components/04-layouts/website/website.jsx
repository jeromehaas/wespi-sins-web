import PropTypes from 'prop-types';
import Footer from 'components/03-organisms/footer/footer';
import OpeningTimes from 'components/03-organisms/opening-times/opening-times';
import DesktopNavigation from 'components/03-organisms/desktop-navigation/desktop-navigation';
import MobileNavigation from 'components/03-organisms/mobile-navigation/mobile-navigation';
import Grid from '../grid/grid';

const Website = ({ className = '', children = null }) => {

	return (
		<div className={ `${ className } website` }>
			<DesktopNavigation />
			<MobileNavigation />
			{ children }
			<OpeningTimes />
			<Footer />
			<Grid />
		</div>
	);

};

Website.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

export default Website;
