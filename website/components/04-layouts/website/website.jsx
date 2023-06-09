import PropTypes from 'prop-types';
import Footer from 'components/03-organisms/footer/footer';
import OpeningTimes from 'components/03-organisms/opening-times/opening-times';
import DesktopNavigation from 'components/03-organisms/desktop-navigation/desktop-navigation';

const Website = ({ className, children }) => {

	return (
		<div className={ `${ className } website` }>
			<DesktopNavigation />
			{ children }
			<OpeningTimes />
			<Footer />
		</div>
	);

};

Website.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

Website.defaultProps = {
	className: '',
	children: null,
};

export default Website;
