'use client';

// IMPORTS
import PropTypes from 'prop-types';
import Header from 'components/02-molecules/header/header';
import Navigation from 'components/02-molecules/navigation/navigation';
import Content from 'components/02-molecules/content/content';
import { PanelProvider } from 'contexts/panel-context';
import { usePathname } from 'next/navigation';

// COMPONENT
const Panel = ({ className = '', children = null }) => {

	// CONTST GET PATH
	const pathname = usePathname();

	// RENDER
	return (
		<PanelProvider>
			<div className={ `${ className } panel` }>
				<Header className="panel__header" />
				{ pathname.startsWith('/news') || pathname.startsWith('/order') || pathname.startsWith('/flowers') || pathname.startsWith('/messages')
					? <Navigation className="panel__navigation" />
					: null }
				<Content className="panel__content">{ children }</Content>
			</div>
		</PanelProvider>
	);

};

// PROP-TYPES
Panel.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

// EXPORT
export default Panel;
