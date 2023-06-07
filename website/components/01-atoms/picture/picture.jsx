import PropTypes from 'prop-types';
import Image from 'next/image';

const Picture = ({ className, src, alt, quality, priority, width, height }) => {

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
};

Picture.defaultProps = {
	className: '',
	quality: 75,
	width: 2500,
	height: 1600,
	src: '/',
	alt: '',
};

export default Picture;
