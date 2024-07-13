import Header from './_components/Header/Header';
import '../sass/_main.scss';

export const metadata = {
  title: "SurfCamp",
  description: "Surfing Camp App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};
