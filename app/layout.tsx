import './globals.css';

export const metadata = {
  title: 'CodeArc Labs — Websites, Apps & Interactive Experiences',
  description: 'CodeArc Labs is a creative web and app development agency building expressive digital products, motion-rich websites and polished interfaces.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
