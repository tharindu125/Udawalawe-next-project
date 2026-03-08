import Head from 'next/head';
import { Card, Button, Row, Col } from "react-bootstrap";
import CustomNavbar from '../src/components/CustomNavbar';

import seasonalHero from '../src/assets/Sigiriya-Leopard-in-Sri-Lanka-hero.jpg';
import whaleWatching from '../src/assets/Whale-Wathing.jpg';
import trincomaleeBeach from '../src/assets/trincomaleeBeach.jpg';
import arugambaySurf from '../src/assets/arugambaySurf.jpg';
import kumanaSafari from '../src/assets/Yala-National-Park.jpg';
import adamsPeak from '../src/assets/adamsPeak.jpg';


function SeasonalTours() {
    return (
        <>
            <Head>
                <title>Seasonal Tours | Udawalawe Elegarden Safari Resort - Special Adventures</title>
                <meta name="description" content="Explore Sri Lanka's best seasonal tours — whale watching, Trincomalee beaches, Arugambay surfing, Kumana bird safari, and Adam's Peak pilgrimage." />
                <meta name="keywords" content="seasonal tours Sri Lanka, whale watching Sri Lanka, Trincomalee beach tour, Arugambay surfing, Kumana bird safari, Adams Peak pilgrimage, Sri Lanka seasonal travel" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://udawalaweelegardenhotelandsafari.com/SeasonalTours" />

                <meta property="og:title" content="Seasonal Tours in Sri Lanka | Udawalawe Elegarden Safari Resort" />
                <meta property="og:description" content="Discover Sri Lanka's seasonal highlights — whale watching, beach retreats, surfing, bird safaris, and sacred mountain treks." />
                <meta property="og:image" content="https://udawalaweelegardenhotelandsafari.com/logo.jpg" />
                <meta property="og:image:alt" content="Seasonal Tours in Sri Lanka" />
                <meta property="og:url" content="https://udawalaweelegardenhotelandsafari.com/SeasonalTours" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Seasonal Tours in Sri Lanka | Udawalawe Elegarden Safari Resort" />
                <meta name="twitter:description" content="Whale watching, beaches, surfing, bird safaris, and mountain treks — the best of Sri Lanka's seasonal experiences." />
                <meta name="twitter:image" content="https://udawalaweelegardenhotelandsafari.com/logo.jpg" />
            </Head>
            
            <CustomNavbar />

            {/* Hero Section */}
            <div
                className="about-hero-section"
                style={{
                    position: 'relative',
                    width: '100vw',
                    height: '400px',
                    background: `url(${seasonalHero.src}) no-repeat center center/cover`
                }}
            >
                <div className="hero-overlay">
                    <h1 className="text-center text-white fw-bold" data-aos="fade-up" data-aos-delay="200">
                        Seasonal Tours in Sri Lanka
                    </h1>
                    <p className="text-center text-white" data-aos="fade-up" data-aos-delay="300">
                        Explore Sri Lanka's best seasonal attractions, from ocean giants to sacred mountain trails.
                    </p>
                </div>
            </div>

            <div className=" py-5 safari_tours">
                <h2 className="text-center mb-4 fw-bold display-6 text-warning-emphasis" data-aos="zoom-in" data-aos-delay="200">
                    Featured Seasonal Tours
                </h2>
                <p className='text-center mb-5' data-aos="flip-up" data-aos-delay="200">
                    Discover the best seasonal experiences Sri Lanka has to offer. From whale watching to pilgrimages, each tour is guided by local experts.
                </p>

                <Row>
                    {/* Whale Watching */}
                    <Col md={12} className="">
                        <Card className="border-0 bg-transparent">
                            <Row className="g-0 align-items-center">
                                <Col md={6}><img src={whaleWatching.src} className="img-fluid rounded" alt="Whale Watching Tour" /></Col>
                                <Col md={6} className="px-2 py-4">
                                    <h2 className="fw-bold text-uppercase mb-3">Whale Watching & Boat Tours</h2>
                                    <p className="text-muted">Join our expert-led boat trips to witness blue whales, dolphins, and other marine life just off Sri Lanka’s southern coast. Best time: Nov to April.</p>
                                    <Button href="/WhaleWatchingTours" className="btn-warning border-0 fw-bold px-4 py-2 rounded">Explore</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    {/* Trincomalee Beaches */}
                    <Col md={12} className="">
                        <Card className="border-0 bg-transparent">
                            <Row className="g-0 align-items-center">
                                <Col md={6}><img src={trincomaleeBeach.src} className="img-fluid rounded" alt="Trincomalee Beach" /></Col>
                                <Col md={6} className="px-2 py-4">
                                    <h2 className="fw-bold text-uppercase mb-3">Trincomalee - Marble & Nilaveli Beach</h2>
                                    <p className="text-muted">Relax on soft sandy beaches and snorkel in the crystal-clear waters of Nilaveli and Marble Beach. Ideal during the east coast season: May to September.</p>
                                    <Button href="/TrincomaleeTours" className="btn-warning border-0 fw-bold px-4 py-2 rounded">Explore</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    {/* Arugambay Surfing */}
                    <Col md={12} className="">
                        <Card className="border-0 bg-transparent">
                            <Row className="g-0 align-items-center">
                                <Col md={6}><img src={arugambaySurf.src} className="img-fluid rounded" alt="Arugambay Surfing" /></Col>
                                <Col md={6} className="px-2 py-4">
                                    <h2 className="fw-bold text-uppercase mb-3">Arugambay Surf & Chill</h2>
                                    <p className="text-muted">Catch waves at Sri Lanka’s top surf destination and enjoy the beach lifestyle. Season: April to October.</p>
                                    <Button href="/ArugambayTours" className="btn-warning border-0 fw-bold px-4 py-2 rounded">Explore</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    {/* Kumana Safari */}
                    <Col md={12} className="">
                        <Card className="border-0 bg-transparent">
                            <Row className="g-0 align-items-center">
                                <Col md={6}><img src={kumanaSafari.src} className="img-fluid rounded" alt="Kumana Safari" /></Col>
                                <Col md={6} className="px-2 py-4">
                                    <h2 className="fw-bold text-uppercase mb-3">Yala - Kumana Bird Safari</h2>
                                    <p className="text-muted">Explore the untouched side of Yala. Kumana is a birdwatcher’s paradise and perfect for nature photography. Season: April to July.</p>
                                    <Button href="/KumanaTours" className="btn-warning border-0 fw-bold px-4 py-2 rounded">Explore</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    {/* Adam’s Peak */}
                    <Col md={12} className="">
                        <Card className="border-0 bg-transparent">
                            <Row className="g-0 align-items-center">
                                <Col md={6}><img src={adamsPeak.src} className="img-fluid rounded" alt="Adam's Peak" /></Col>
                                <Col md={6} className="px-2 py-4">
                                    <h2 className="fw-bold text-uppercase mb-3">Adam’s Peak Pilgrimage</h2>
                                    <p className="text-muted">Join a sacred journey to the top of Sri Lanka’s holy mountain. Best climbed between December and May for sunrise views and cultural experience.</p>
                                    <Button href="/AdamsPeakTours" className="btn-warning border-0 fw-bold px-4 py-2 rounded">Explore</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default SeasonalTours;
