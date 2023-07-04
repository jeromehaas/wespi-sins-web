import PropTypes from 'prop-types';
import { Fragment, forwardRef } from 'react';

const Section = forwardRef(({ className = '', children = null }, ref) => {

	return (
		<Fragment>
			<div className={ `${ className }__target target` } id={ className } />
			<section className={ `${ className } section` } ref={ ref }>
				<div className={ `${ className }__inner section__inner` }>{ children }</div>
			</section>
		</Fragment>
	);

});

Section.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

export default Section;
