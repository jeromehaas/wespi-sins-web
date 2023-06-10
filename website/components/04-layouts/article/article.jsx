const Article = ({ className = '', children = null }) => {

	return (
		<article className={ `${ className } article` }>
			{ children }
		</article>
	);

};

export default Article;
