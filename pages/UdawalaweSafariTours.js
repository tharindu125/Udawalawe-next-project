import Head from 'next/head';

import {Card, Button, Row, Col } from "react-bootstrap";

import CustomNavbar from '../src/components/CustomNavbar';

import backgroundimage02 from '../src/assets/sri_lanka_elephant_04.jpg'
import backgroundimage03 from '../src/assets/sri_lanka_elephant_01.jpg'
import backgroundimage04 from '../src/assets/sri-lanka-wild-life.jpg'
import slider1 from '../src/assets/Udawalawe-Safari-Leopard-in-Sri-Lanka-hero.jpg';
import udawalava01 from '../src/assets/Udawalawe-Safari-Leopard-in-Sri-Lanka-C-2.jpg'

function SafariTours() {

    return (
        <>
            <Head>
                <title>Udawalawe Safari Tour Packages | 3Hr, 6Hr, 12Hr Safari Tours</title>
                <meta name="description" content="Choose from 3-hour (Rs.12,000), 6-hour (Rs.20,000), or 12-hour (Rs.35,000) Udawalawe safari packages. Expert guides, private jeep, hotel pickup included." />
                <meta name="keywords" content="Udawalawe safari packages, 3 hour safari Sri Lanka, half day safari Udawalawe, full day safari tour, safari jeep tour price, elephant safari tour" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://udawalaweelegardenhotelandsafari.com/UdawalaweSafariTours" />

                <meta property="og:title" content="Udawalawe Safari Tour Packages | 3Hr, 6Hr & 12Hr Tours" />
                <meta property="og:description" content="Choose your safari: Normal 3Hr (Rs.12,000), Half Day 6Hr (Rs.20,000), or Full Day 12Hr (Rs.35,000). Private jeep, expert guides, hotel pickup included." />
                <meta property="og:image" content="https://udawalaweelegardenhotelandsafari.com/logo.jpg" />
                <meta property="og:image:alt" content="Udawalawe Safari Tour Packages" />
                <meta property="og:url" content="https://udawalaweelegardenhotelandsafari.com/UdawalaweSafariTours" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Udawalawe Safari Tour Packages | 3Hr, 6Hr & 12Hr" />
                <meta name="twitter:description" content="Book a guided Udawalawe safari: 3Hr, 6Hr, or Full Day tours. Private jeep with expert driver. Hotel pickup included." />
                <meta name="twitter:image" content="https://udawalaweelegardenhotelandsafari.com/logo.jpg" />

                <script type="application/ld+json">
                  {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "TouristTrip",
                    "name": "Udawalawe Safari Tours",
                    "url": "https://udawalaweelegardenhotelandsafari.com/UdawalaweSafariTours",
                    "description": "Guided jeep safari tours through Udawalawe National Park with experienced local guides.",
                    "offers": [
                      {
                        "@type": "Offer",
                        "name": "Normal Safari Tour - 3 Hours",
                        "price": "12000",
                        "priceCurrency": "LKR",
                        "description": "3-hour safari with hotel pickup, water, snacks, and binoculars."
                      },
                      {
                        "@type": "Offer",
                        "name": "Half Day Safari Tour - 6 Hours",
                        "price": "20000",
                        "priceCurrency": "LKR",
                        "description": "6-hour safari with hotel pickup, optional jungle breakfast, and expert guide."
                      },
                      {
                        "@type": "Offer",
                        "name": "Full Day Safari Tour - 12 Hours",
                        "price": "35000",
                        "priceCurrency": "LKR",
                        "description": "Full 12-hour safari exploring popular and hidden trails with expert local guide."
                      }
                    ]
                  })}
                </script>
            </Head>
            
            <CustomNavbar />

            {/* Hero Section */}
            <div className="about-hero-section" style={{ position: 'relative', width: '100vw', height: '400px', background: `url(${slider1.src}) no-repeat center center/cover` }}>
                <div className="hero-overlay">
                    <h1 className="text-center text-white fw-bold" data-aos="fade-up" data-aos-delay="200">Udawalawe Safari Tours</h1>
                    <p className="text-center text-white" data-aos="fade-up" data-aos-delay="300">
                        Discover the wild beauty of Udawalawe National Park with expert guides, private jeeps, and unforgettable wildlife encounters.
                    </p>
                </div>
            </div>

            <div className="container py-5 safari_tours">
                <h2 className="text-center mb-4 fw-bold display-6 text-warning-emphasis" data-aos="zoom-in" data-aos-delay="200">Tour Packages</h2>
                <p className='text-center mb-5' data-aos="flip-up" data-aos-delay="200">
                    Embark on an unforgettable journey through Udawalawa National Park with our guided safari tours. Spot elephants, leopards, birds, and more while enjoying safe, knowledgeable service and breathtaking views of nature.
                </p>
            </div>

            <section className="safari_tours-packeges">
                <Row>
                    <Col md={12} className="py-2" style={{background: `url(${backgroundimage03.src}) no-repeat center center/cover `}}>
                        <Card className="border-0 bg-transparent">
                            <Row className="g-0 align-items-center">
                                {/* Left Image Side */}
                                <Col md={6}>
                                </Col>
        
                                {/* Right Content Side */}
                                <Col md={6} className="text-center px-4 py-5" style={{ backgroundColor: 'rgba(246, 239, 213, 0.5)' }}>
                                    <h2 className="fw-bold text-uppercase mb-3" style={{ color: '#3d1e00', fontSize: '2rem' }}>
                                        Udawalawe Safari Tours
                                    </h2>
                                    <p className="text-muted mb-3 manual_text_left text_shadow_black">
                                       Udawalawe National Park is one of the most popular parks for easily spotting elephants. It is located along the boundary between the 
                                       dry and wet zones of Sri Lanka, giving it rich biodiversity.
                                    </p>
                                    <p className="text-muted mb-3 manual_text_left text_shadow_black">
                                        The park lies between the Uva and Sabaragamuwa provinces and is the third most visited national park in Sri Lanka. 
                                        It covers an area of 30,821 hectares, including the Udawalawe reservoir.
                                    </p>
                                    <p className="text-muted mb-3 manual_text_left text_shadow_black">
                                        This park is a paradise not only for elephants but also for a variety of birds, reptiles, amphibians, mammals, fish, wild cats, 
                                        diverse plant species, and seasonal migratory birds.
                                    </p>
                                    <p className="text-muted mb-3 manual_text_left text_shadow_black">
                                        You can even see the dwarf elephant in this forest — the only one of its kind found in South Asia.
                                    </p>
                                    <Button
                                        href="/contact#book_now"
                                        className="px-4 py-2 fw-bold text-uppercase border-0"
                                        style={{
                                            backgroundColor: '#f8aa28',
                                            borderRadius: '10px',
                                            letterSpacing: '1px',
                                            color: '#3d1e00'
                                        }}
                                    >
                                        Book Tour
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    
                    <Col md={12} className="py-5">
                        <Card className="border-0 bg-transparent">
                            <Row className="g-0 align-items-center">
                                {/* Left Image Side */}
                                <Col md={6}>
                                    <img
                                    src={udawalava01.src}
                                    alt="Udawalawe National Park Safari"
                                    className="img-fluid"
                                    style={{ objectFit: 'cover', borderRadius: '5px'}}
                                    />
                                </Col>
        
                                {/* Right Content Side */}
                                <Col md={6} className="text-center px-4 py-2">
                                    <h2 className="fw-bold text-uppercase mb-3" style={{ color: '#3d1e00', fontSize: '2rem' }}>
                                        Normal Safari Tours
                                    </h2>
                                    <p className="text-muted mb-3 manual_text_left text_shadow_black">
                                        A Quick Safari Adventure in Udawalawe
                                    </p>
                                    <p className="text-muted mb-3 manual_text_left text_shadow_black">
                                        Short on time? This 3-hour safari is perfect for travelers looking to experience Udawalawe’s wildlife highlights 
                                        without committing to a long day. You’ll explore key areas of the park, with a high chance of spotting elephants, 
                                        buffalo, peacocks, and birds in their natural habitat.
                                    </p>
                                    <p className="text-muted mb-3 manual_text_left text_shadow_black">
                                        Our experienced driver and guide ensure a smooth, educational journey while you ride comfortably in a private jeep. 
                                        This is the ideal option for early morning or late afternoon explorers.
                                    </p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">✅ Up to 6 guests per jeep</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">✅ 3-Hour : Includes hotel pickup & drop-off</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">✅ Water, snacks, and binoculars provided</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">✅ Comfortable jeep with expert driver (Over 10 years of experience)</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">✅ Ideal for photography & nature lovers</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black p-3 mt-3" style={{backgroundColor: '#fae5c4ff', borderRadius: '5px', boxShadow: '0 0 8px #00000081'}}>
                                        Rs: 12000.00 Per Jeep
                                    </p>

                                    <Button
                                        href="/contact#book_now"
                                        className="px-4 py-2 fw-bold text-uppercase border-0 mt-3"
                                        style={{
                                            backgroundColor: '#f8aa28',
                                            borderRadius: '10px',
                                            letterSpacing: '1px',
                                            color: '#3d1e00'
                                        }}
                                    >
                                        Book Tour
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    <Col md={12} className="py-2" style={{background: `url(${backgroundimage02.src}) no-repeat center center/cover `}}>
                        <Card className="border-0 bg-transparent">
                            <Row className="g-0 align-items-center">
                                {/* Left Image Side */}
                                <Col md={6}>
                                </Col>
        
                                {/* Right Content Side */}
                                <Col md={6} className="text-center px-4 py-5" style={{ backgroundColor: 'rgba(151, 145, 126, 0.7)' }}>
                                    <h2 className="fw-bold text-uppercase mb-3" style={{ color: '#3d1e00', fontSize: '2rem' }}>
                                        Half Day Safari Tours
                                    </h2>
                                    <p className="text-light mb-3 manual_text_left text_shadow_black">
                                        Deeper Exploration with Stunning Wildlife Encounters
                                    </p>
                                    <p className="text-light mb-3 manual_text_left text_shadow_black">
                                        Our Half Day Safari Tour (6-hour) gives you the time to fully immerse yourself in Udawalawe’s natural beauty. Choose a morning or 
                                        evening safari, both offering peak wildlife activity — with elephants, eagles, crocodiles, and even wild cats often seen.
                                    </p>
                                    <p className="text-light mb-3 manual_text_left text_shadow_black">
                                        We’ll take a relaxing break mid-safari near a quiet jungle stream or the Udawalawe reservoir. 
                                        Optional jungle breakfast can be arranged for morning guests — a truly wild dining experience!
                                    </p>
                                    <p className="text-light mb-1 manual_text_left text_shadow_white">✅ Up to 6 guests per jeep</p>
                                    <p className="text-light mb-1 manual_text_left text_shadow_black">✅ 6-Hour : Includes hotel pickup & drop-off</p>
                                    <p className="text-light mb-1 manual_text_left text_shadow_black">✅ Water, snacks, and binoculars provided</p>
                                    <p className="text-light mb-1 manual_text_left text_shadow_black">✅ Comfortable jeep with expert driver (Over 10 years of experience)</p>
                                    <p className="text-light mb-1 manual_text_left text_shadow_black">✅ Optional jungle breakfast / lunch available</p>
                                    <p className="text-light mb-1 manual_text_left text_shadow_black p-3 mt-3" style={{backgroundColor: '#5e4823ce', borderRadius: '5px', boxShadow: '0 0 8px #00000081'}}>
                                        Rs: 20000.00 Per Jeep
                                    </p>

                                    <Button
                                        href="/contact#book_now"
                                        className="px-4 py-2 fw-bold text-uppercase border-0 mt-3"
                                        style={{
                                            backgroundColor: '#f8aa28',
                                            borderRadius: '10px',
                                            letterSpacing: '1px',
                                            color: '#3d1e00'
                                        }}
                                    >
                                        Book Tour
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    <Col md={12} className="py-2">
                        <Card className="border-0 bg-transparent">
                            <Row className="g-0 align-items-center">
                                {/* Left Image Side */}
                                <Col md={6}>
                                    <img
                                    src={backgroundimage04.src}
                                    alt="Udawalawe National Park Safari"
                                    className="img-fluid"
                                    style={{ objectFit: 'cover', borderRadius: '5px'}}
                                    />
                                </Col>
        
                                {/* Right Content Side */}
                                <Col md={6} className="text-center px-4 py-5">
                                    <h2 className="fw-bold text-uppercase mb-3" style={{ color: '#3d1e00', fontSize: '2rem' }}>
                                        Full Day Safari Tours
                                    </h2>
                                    <p className="text-muted mb-3 manual_text_left text_shadow_black">
                                        The Ultimate Safari Experience in Sri Lanka
                                    </p>
                                    <p className="text-muted mb-3 manual_text_left text_shadow_black">
                                        If you’re serious about wildlife, this Full Day Safari (12-hour)  is made for you. Spend the entire day inside Udawalawe National Park, 
                                        maximizing your chances to witness everything from herds of elephants to rare bird species and elusive predators.
                                    </p>
                                    <p className="text-muted mb-3 manual_text_left text_shadow_black">
                                        You’ll explore both popular tracks and hidden paths, with plenty of breaks for rest and wildlife observation. 
                                        A jungle breakfast can be arranged to start your day right, and you'll be accompanied by a highly knowledgeable local guide.
                                    </p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">✅ Up to 6 guests per jeep</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">✅ 12-Hour : Includes hotel pickup & drop-off</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">✅ Water, snacks, and binoculars provided</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">✅ Comfortable jeep with expert driver (Over 10 years of experience)</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black">✅ Optional jungle breakfast / lunch available</p>
                                    <p className="text-muted mb-1 manual_text_left text_shadow_black p-3 mt-3" style={{backgroundColor: '#fae5c4ff', borderRadius: '5px', boxShadow: '0 0 8px #00000081'}}>
                                        Rs: 35000.00 Per Jeep
                                    </p>

                                    <Button
                                        href="/contact#book_now"
                                        className="px-4 py-2 fw-bold text-uppercase border-0 mt-3"
                                        style={{
                                            backgroundColor: '#f8aa28',
                                            borderRadius: '10px',
                                            letterSpacing: '1px',
                                            color: '#3d1e00'
                                        }}
                                    >
                                        Book Tour
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                </Row>
            </section>

        </>
    )
}

export default SafariTours;