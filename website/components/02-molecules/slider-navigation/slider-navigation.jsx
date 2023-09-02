'use client';

// IMPORTS
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

// COMPONENT
const SliderNavigation = ({ className = '', sliderController }) => {

	// SETUP REFS
	const sliderNavigationRef = useRef();
	const sliderNavigationTimelineRef = useRef();

	// UPDATE SLIDER ORDER
	useEffect(() => {
		gsap.context(() => {
			sliderNavigationTimelineRef.current = gsap.timeline();
			sliderNavigationTimelineRef.current.to('.navigation__item .item__arrow', { width: '0' }, 0);
			sliderNavigationTimelineRef.current.to('.navigation__item .item__index', { color: '#9E453E' }, 0);
			sliderNavigationTimelineRef.current.to(`.navigation__item:nth-child(${ sliderController.counter }) .item__index`, { color: '#000000' }, 0);
			sliderController.counter !== sliderController.images.length && sliderNavigationTimelineRef.current.to(`.navigation__item:nth-child(${ sliderController.counter }) .item__arrow`, { width: '24px' }, 0);
		}, sliderNavigationRef);
	}, [sliderController.counter]);

	// RENDER
	return (
		<div className={ `${ className } slider-navigation` } ref={ sliderNavigationRef }>
			{ sliderController.images.map((image, index) => {
				return (
					<div className="navigation__item item" key={ image.id }>
						<Paragraph className="item__index" onClick={ () => { return sliderController.handleJump(index + 1); } }>{ String(index + 1).padStart(2, 0) }</Paragraph>
						<svg className="item__arrow" width="30" height="13" viewBox="0 0 30 13" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M24 11.125L28.5 6.5L24 1.875M1.5 6.5L28.5 6.5L1.5 6.5Z" stroke="#9E453E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</div>
				);
			})}
		</div>
	);

};

// EXPORT
export default SliderNavigation;
