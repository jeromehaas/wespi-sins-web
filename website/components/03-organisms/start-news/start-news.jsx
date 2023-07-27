'use client';

// IMPORTS
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Heading from 'components/01-atoms/heading/heading';
import Anchor from 'components/01-atoms/anchor/anchor';
import Markdown from 'components/01-atoms/markdown/markdown';
import Picture from 'components/01-atoms/picture/picture';
import Section from 'components/04-layouts/section/section';
import Action from 'components/01-atoms/action/action';

// COMPONENT
const StartNews = ({ news }) => {

	// SETUP REFS
	const sectionRef = useRef();
	const sectionTimelineRef = useRef();
	const announcementTimelineRef = useRef();

	// FADE-IN ANIMATION
	useEffect(() => {
		const context = gsap.context(() => {
			announcementTimelineRef.current = gsap.timeline({ paused: true });
			announcementTimelineRef.current.to('.start-news .announcements .announcements__item', { bottom: '50%' });
		}, sectionRef);
		return () => { return context.revert(); };
	});

	// FADE-IN ANIMATION
	useEffect(() => {
		const context = gsap.context(() => {
			sectionTimelineRef.current = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top bottom-=160px', end: 'bottom top+=160px', markers: false }, delay: 0.3 });
			sectionTimelineRef.current.to('.start-news .banner__heading', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
			sectionTimelineRef.current.to('.start-news .banner__list', { autoAlpha: 1, top: 0, duration: 0.3 }, 0);
		}, sectionRef);
		return () => context.revert();
	}, []);

	// SHOW ANNOUNCEMENT
	const showAnnouncement = (event, id) => {
		event.preventDefault();
		gsap.context(() => {
			announcementTimelineRef.current = gsap.timeline();
			document.querySelector(`.start-news .announcements__item[data-id="${ id }"] `) && announcementTimelineRef.current.to(`.start-news .announcements .announcements__item[data-id="${ id }"]`, { bottom: '0%', duration: 0.5 }, 0);
			document.querySelector(`.start-news .announcements__item[data-id="${ id }"] .content__navigator`) && announcementTimelineRef.current.to(`.start-news .announcements .announcements__item[data-id="${ id }"] .content__navigator`, { autoAlpha: 1, top: '0', duration: 0.5, ease: '' }, 0.75);
			document.querySelector(`.start-news .announcements__item[data-id="${ id }"] .content__image`) && announcementTimelineRef.current.to(`.start-news .announcements .announcements__item[data-id="${ id }"] .content__image`, { autoAlpha: 1, top: '0', duration: 0.5, ease: '' }, 1);
			document.querySelector(`.start-news .announcements__item[data-id="${ id }"] .content__heading `) && announcementTimelineRef.current.to(`.start-news .announcements .announcements__item[data-id="${ id }"] .content__heading`, { autoAlpha: 1, top: '0', duration: 0.5, ease: '' }, 1.25);
			document.querySelector(`.start-news .announcements__item[data-id="${ id }"] .content__text`) && announcementTimelineRef.current.to(`.start-news .announcements .announcements__item[data-id="${ id }"] .content__text`, { autoAlpha: 1, top: '0', duration: 0.5, ease: '' }, 1.5);
		}, sectionRef);
	};

	// CLOSE ANNOUNCEMENT
	const closeAnnouncement = (event) => {
		event.preventDefault();
		gsap.context(() => {
			announcementTimelineRef.current = gsap.timeline();
			announcementTimelineRef.current.to('.start-news .announcements .announcements__item .content__text', { autoAlpha: 0, top: '16px', duration: 0.5, ease: '' }, 0);
			announcementTimelineRef.current.to('.start-news .announcements .announcements__item .content__heading', { autoAlpha: 0, top: '16px', duration: 0.5, ease: '' }, 0.25);
			announcementTimelineRef.current.to('.start-news .announcements .announcements__item .content__image', { autoAlpha: 0, top: '16px', duration: 0.5, ease: '' }, 0.5);
			announcementTimelineRef.current.to('.start-news .announcements .announcements__item .content__navigator', { autoAlpha: 0, top: '16px', duration: 0.5, ease: '' }, 0.75);
			announcementTimelineRef.current.to('.start-news .announcements .announcements__item', { bottom: '100%', duration: 0.5 });
		}, sectionRef);
	};

	// RENDER
	return (
		<Section className="start-news" ref={ sectionRef }>
			<div className="start-news__banner banner">
				<Heading className="banner__heading animation--fade-in" level="h2">Aktuell</Heading>
				<div className="banner__list list animation--fade-in">
					{ news.data.map((item) => (
						<div className="list__item item" key={ item.id }>
							<Heading className="item__heading" level="h4">{ item.attributes.heading}</Heading>
							<Anchor className="item__link" href="/" hasArrow onClick={ (event) => { return showAnnouncement(event, item.id); } }>Mehr erfahren</Anchor>
						</div>
					))}
				</div>
			</div>
			<div className="start-news__announcements announcements">
				{ news.data ? news.data.map((item) => (
					<div className="announcements__item item" data-id={ item.id } key={ item.id }>
						<div className="item__inner">
							<div className="item__content content">
								<div className="item__content content">
									<Action className="content__navigator animation--fade-in" symbol="chevron-left" onClick={ (event) => { return closeAnnouncement(event); } }>zurück</Action>
									<Picture className="content__image animation--fade-in" src={ item.attributes.image.data.attributes.url } alt={ item.attributes.heading } width={ item.attributes.image.data.attributes.width } height={ item.attributes.image.data.attributes.height } />
									<Heading className="content__heading animation--fade-in" level="h2">{ item.attributes.heading }</Heading>
									<Markdown className="content__text animation--fade-in">
										{ item.attributes.text }
									</Markdown>
								</div>
							</div>
						</div>
					</div>
				)) : null }
			</div>
		</Section>
	);

};

// EXPORT
export default StartNews;
