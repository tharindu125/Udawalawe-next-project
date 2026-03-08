import { useEffect } from 'react';
import { useRouter } from 'next/router';
import FloatingButtons from '../src/components/FloatingButtons';
import Footer from '../src/components/Footer';

// Import global styles
import '../src/index.css';
import '../src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'animate.css/animate.min.css';

// Import AOS for animations
import AOS from 'aos';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Bootstrap JS (imported dynamically to avoid SSR issues)
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  // Handle hash navigation for smooth scrolling
  useEffect(() => {
    if (router.asPath.includes('#')) {
      const hash = router.asPath.split('#')[1];
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [router.asPath]);

  return (
    <>
      <Component {...pageProps} />
      <FloatingButtons />
      <Footer />
    </>
  );
}

export default MyApp;
