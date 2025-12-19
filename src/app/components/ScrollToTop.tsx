'use client';
import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    // This runs as soon as the redirected page mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return null;
}