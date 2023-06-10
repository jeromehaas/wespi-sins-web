import Website from 'components/04-layouts/website/website';
import StartIntro from 'components/03-organisms/start-intro/start-intro';
import StartNews from 'components/03-organisms/start-news/start-news';

const Page = () => {

	return (
		<Website>
			<StartNews />
			<StartIntro />
		</Website>

	);

};

export default Page;
