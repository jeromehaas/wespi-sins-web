import { Fragment } from 'react';
import ImprintIntro from 'components/03-organisms/imprint-intro/imprint-intro';
import ImprintResponsiibilities from 'components/03-organisms/imprint-responsibilities/imprint-responsibilities';

// PAGE
const Page = () => {

	// RENDER
	return (
		<Fragment>
			<ImprintIntro />
			<ImprintResponsiibilities />
		</Fragment>
	);

};

// EXPORT
export default Page;
