import '../sass/_main.scss';

export const metadata = {
  title: "SurfCamp",
  description: "Surfing Camp App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
