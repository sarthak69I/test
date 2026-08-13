import './globals.css';

export const metadata = {
  title: 'SiteCharm — Websites & Apps that move',
  description: 'Creative web and app development agency building expressive digital experiences.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
