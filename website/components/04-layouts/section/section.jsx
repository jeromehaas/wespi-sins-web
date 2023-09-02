// IMPORTS
import { Fragment, forwardRef } from 'react';

// COMPONENT
const Section = forwardRef(({ className = '', children = null }, ref) => {

	// RENDER
	return (
		<Fragment>
			<div className={ `${ className }__target target` } id={ className } />
			<section className={ `${ className } section` } ref={ ref }>
				<div className={ `${ className }__inner section__inner` }>{ children }</div>
			</section>
		</Fragment>
	);

});

// EXPORT
export default Section;
