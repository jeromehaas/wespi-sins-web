import './styles/main.scss'

const RootLayout = ({ children }) => {

  return (
    <html lang="de">
      <body>
				{children}
			</body>
    </html>
  );

};

export default RootLayout;