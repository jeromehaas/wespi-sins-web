import Section from 'components/04-layouts/section/section';
import Picture from 'components/01-atoms/picture/picture';

const FlowersImpression = () => {

	return (
		<Section className="flowers-impression">
			<Picture className="flowers-impression__image" src="/images/general/wespi-blumen-angebot.webp" width={ 1920 } height={ 1600 } />
		</Section>
	);

};

export default FlowersImpression;
