// IMPORTS
import Footer from 'components/03-organisms/footer/footer';
import OpeningTimes from 'components/03-organisms/opening-times/opening-times';
import DesktopNavigation from 'components/03-organisms/desktop-navigation/desktop-navigation';
import MobileNavigation from 'components/03-organisms/mobile-navigation/mobile-navigation';
import Order from 'components/03-organisms/order/order';
import Grid from 'components/04-layouts/grid/grid';
import CookieBanner from 'components/03-organisms/cookie-banner/cookie-banner';
import { OrderProvider } from 'contexts/order-context';

// COMPONENT
const Website = ({ className = '', children = null }) => {

	// RENDER
	return (
		<OrderProvider>
			<div className={ `${ className } website` }>
				<DesktopNavigation />
				<MobileNavigation />
				<CookieBanner />
				{ children }
				<OpeningTimes />
				<Footer />
				<Order />
				<Grid />
			</div>
		</OrderProvider>
	);

};

// EXPORT
export default Website;
