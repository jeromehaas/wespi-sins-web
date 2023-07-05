import 'styles/main.scss';
import Website from 'components/04-layouts/website/website';

const RootLayout = ({ children }) => {

	return (
		<html lang="de">
			<body>
				<Website>
					{children}
				</Website>
			</body>
		</html>
	);

};

export default RootLayout;
