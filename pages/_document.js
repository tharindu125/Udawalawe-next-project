import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/jpeg" href="/logo.jpg" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Fonts */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/logo.jpg" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#febf00" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Default robots */}
        <meta name="robots" content="index, follow" />

        {/* Site name for Open Graph */}
        <meta property="og:site_name" content="Udawalawe Elegarden Safari Resort" />

        {/* Geo tags */}
        <meta name="geo.region" content="LK" />
        <meta name="geo.placename" content="Udawalawe, Sri Lanka" />

        {/* Preload logo */}
        <link rel="preload" as="image" href="/logo.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
