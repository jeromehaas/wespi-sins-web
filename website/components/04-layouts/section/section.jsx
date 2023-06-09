import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Section = forwardRef(({ className, children }, ref) => {

	return (
		<section className={ `${ className } section` } id={ className } ref={ ref }>
			<div className={ `${ className }__inner section__inner` }>{ children }</div>
		</section>
	);

});

Section.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

Section.defaultProps = {
	className: '',
	children: null,
};

export default Section;