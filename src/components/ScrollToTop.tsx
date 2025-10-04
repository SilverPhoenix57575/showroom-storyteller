import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const isComingFromProduct = prevPathname.current.startsWith('/product/');
    const isGoingToCollections = pathname === '/collections';
    const isComingFromCollections = prevPathname.current === '/collections';
    const isGoingToProduct = pathname.startsWith('/product/');
    
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (isGoingToCollections && isComingFromProduct) {
      // Restore scroll position when coming back to collections from product
      const savedPosition = sessionStorage.getItem('collectionsScrollPosition');
      if (savedPosition) {
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedPosition));
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      // Clear saved position when navigating to collections from other pages
      if (isGoingToCollections && !isComingFromProduct) {
        sessionStorage.removeItem('collectionsScrollPosition');
      }
      window.scrollTo(0, 0);
    }
    
    prevPathname.current = pathname;
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;