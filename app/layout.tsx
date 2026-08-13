import Script from 'next/script';
import './globals.css';

export const metadata = {
  title: 'CodeArc Labs — Websites, Apps & Interactive 3D',
  description: 'CodeArc Labs is a creative web and app development agency building expressive digital products, interactive websites and 3D experiences.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.10.81/build/spline-viewer.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
