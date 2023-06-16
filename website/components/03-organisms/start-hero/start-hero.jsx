'use client';

import Heading from 'components/01-atoms/heading/heading';
import Paragraph from 'components/01-atoms/paragraph/paragraph';
import Section from 'components/04-layouts/section/section';
import Anchor from 'components/01-atoms/anchor/anchor';
import Article from 'components/04-layouts/article/article';
import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

const StartHero = () => {

	// SETUP STATE
	const [theme, setTheme] = useState('stationery');

	// SETUP REFS
	const flowersVideoRef = useRef();
	const stationeryVideoRef = useRef();
	const themeTimelineRef = useRef();
	const startHeroRef = useRef();

	// PLAY VIDEO
	const playVideo = () => {
		if (theme === 'flowers') {
			stationeryVideoRef.current.pause();
			stationeryVideoRef.current.currentTime = 0;
			flowersVideoRef.current.play();
		};
		if (theme === 'stationery') {
			flowersVideoRef.current.pause();
			flowersVideoRef.current.currentTime = 0;
			stationeryVideoRef.current.play();
		};
	};

	// UPDATE THEME
	const updateTheme = () => {
		if (theme === 'flowers') return setTheme('stationery');
		if (theme === 'stationery') return setTheme('flowers');
	};

	// SWITCH THEME LISTENER
	useEffect(() => {
		const context = gsap.context(() => {
			themeTimelineRef.current = gsap.timeline({ onComplete: updateTheme });
			themeTimelineRef.current.call(() => { return playVideo(); }, null, 0);
			themeTimelineRef.current.to('.start-hero .background-video__video', { autoAlpha: '0', duration: 0.3 }, 0);
			themeTimelineRef.current.to(`.start-hero .boxes__item[data-theme="${ theme }"] .progress__status`, { right: '100%', duration: 0 }, 0);
			themeTimelineRef.current.to(`.start-hero .boxes__item[data-theme="${ theme }"] .progress__status`, { left: '0%', duration: 0 }, 0);
			themeTimelineRef.current.to(`.start-hero .background-video__video[data-theme="${ theme }"]`, { autoAlpha: 1, duration: 0.3 }, 0);
			themeTimelineRef.current.to(`.start-hero .boxes__item[data-theme="${ theme }"] .progress__status`, { right: '0%', duration: 4 }, 0.5);
			themeTimelineRef.current.to(`.start-hero .boxes__item[data-theme="${ theme }"] .progress__status`, { left: '100%', duration: 1 }, 4.5);
		}, startHeroRef);
		return () => { return context.revert; };
	}, [theme]);

	return (
		<Section className="start-hero" ref={ startHeroRef }>
			<div className="start-hero__background-video">
				<video className="background-video__video" muted data-theme="flowers" playsInline ref={ flowersVideoRef }>
					<source src="/videos/flowers.mp4" type="video/mp4" />
				</video>
				<video className="background-video__video" data-theme="stationery" muted playsInline ref={ stationeryVideoRef }>
					<source src="/videos/stationery.mp4" type="video/mp4" />
				</video>
			</div>
			<div className="start-hero__boxes boxes">
				<div className="boxes__item item" data-theme="stationery">
					<Article className="item__content content content">
						<Heading className="content__heading" level="h2">Papeterie</Heading>
						<Paragraph className="content__text">Von Schul oder Büromaterial über Geschenkideen bis zu Grusskarten</Paragraph>
						<Anchor className="content__link" href="#" hasArrow>Mehr erfahren</Anchor>
					</Article>
					<div className="item__progress progress">
						<figure className="progress__background" />
						<figure className="progress__status" />
					</div>
				</div>
				<div className="boxes__item item" data-theme="flowers">
					<Article className="item__content content content">
						<Heading className="content__heading" level="h2">Blumen</Heading>
						<Paragraph className="content__text">Freude bereiten mit Geschenken aus der Natur.</Paragraph>
						<Anchor className="content__link" href="#" hasArrow>Mehr erfahren</Anchor>
					</Article>
					<div className="item__progress progress">
						<figure className="progress__background" />
						<figure className="progress__status" />
					</div>
				</div>
			</div>
		</Section>
	);

};

export default StartHero;
