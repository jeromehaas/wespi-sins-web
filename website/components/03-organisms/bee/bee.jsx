'use client';

import Section from 'components/04-layouts/section/section';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

const Bee = () => {

	// REGISTER SCROLLTRIGGER PLUGIN
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	// SETUP REFS
	const beeRef = useRef();
	const beeTimelineRef = useRef();

	// SETUP ANIMATION
	useEffect(() => {
		const context = gsap.context(() => {
			beeTimelineRef.current = gsap.timeline({ delay: 0.25, scrollTrigger: { trigger: beeRef.current, start: 'top bottom-=80px', end: 'bottom top+=80px', markers: false } });
			beeTimelineRef.current.to('.bee .bee__image', { right: '32px', duration: 1 });
		}, beeRef);
		return () => { return context.revert(); };
	}, []);

	return (
		<Section className="bee" ref={ beeRef }>
			<Image className="bee__image" src="/logos/logo-websi-sins-bw-bee-only.png" alt="Bee" width="520" height="320" />
		</Section>
	);

};

export default Bee;
