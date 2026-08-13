'use client';

import SmoothScroll from './SmoothScroll';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SmoothScroll />
      {children}
    </>
  );
}
