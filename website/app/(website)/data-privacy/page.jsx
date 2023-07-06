// IMPORTS
import { Fragment } from 'react';
import DataPrivacyIntro from 'components/03-organisms/data-privacy-intro/data-privacy-intro';
import DataPrivacyLegalInformations from 'components/03-organisms/data-privacy-legal-informations/data-privacy-legal-informations';

// PAGE
const Page = () => {

	// RENDER
	return (
		<Fragment>
			<DataPrivacyIntro />
			<DataPrivacyLegalInformations />
		</Fragment>
	);

};

// EXPORT
export default Page;
