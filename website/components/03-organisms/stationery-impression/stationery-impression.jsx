import Section from 'components/04-layouts/section/section';
import Picture from 'components/01-atoms/picture/picture';

const StationeryImpression = () => {

	return (
		<Section className="stationery-impression">
			<Picture className="stationery-impression__image" src="/images/general/wespi-papeterie-angebot.webp" width={ 1920 } height={ 1600 } />
		</Section>
	);

};

export default StationeryImpression;
