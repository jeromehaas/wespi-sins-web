import PropTypes from 'prop-types';
import Image from 'next/image';

const Picture = ({ className = '', src = '/', alt = '', quality = 75, priority = false, width = 2500, height = 1600 }) => {

	return (
		<Image className={ `${ className} picture` } src={ src } alt={ alt } width={ width } height={ height } quality={ quality || 100 } priority={ priority } />
	);

};

Picture.propTypes = {
	className: PropTypes.string,
	quality: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
	alt: PropTypes.string,
	src: PropTypes.string,
	priority: PropTypes.bool,
};

export default Picture;
