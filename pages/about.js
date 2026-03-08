import Head from 'next/head';
import CustomNavbar from '../src/components/CustomNavbar';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

import { FaCheckCircle, FaInfoCircle, FaRegStar, FaSearchPlus } from 'react-icons/fa'; // Icons for section
import aboutImage from '../src/assets/about-Udawalawa-Elegarden-Hotel.jpg';
import slider1 from '../src/assets/about-Udawalawa-Elegarden-Hotel-Hero.jpg'

function About() {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const services = [
    { icon: "bi-wifi", label: "Free Wi-Fi", delay: 100 },
    { icon: "bi-droplet-half", label: "Hot Water", delay: 200 },
    { icon: "bi-snow", label: "Air Conditioning", delay: 300 },
    { icon: "bi-egg-fried", label: "On-site Restaurant", delay: 1000 },
    { icon: "bi-binoculars", label: "Safari Tours", delay: 900 },
    { icon: "bi-car-front", label: "Free Parking", delay: 600 },
    { icon: "bi-house-door", label: "Private Entrance", delay: 700 },
    { icon: "bi-people", label: "Family Rooms", delay: 800 },
    { icon: "bi-lightning-charge", label: "EV Charging", delay: 1100 },
    { icon: "bi-cup-straw", label: "BYOB Friendly", delay: 1200 },
    { icon: "bi-basket", label: "Laundry Service", delay: 1300 },
    { icon: "bi-bell", label: "Room Service", delay: 1400 },
    { icon: "bi-airplane-engines", label: "Airport Pickup", delay: 1500 },
    { icon: "bi-clock-history", label: "24/7 Front Desk", delay: 1600 },
    { icon: "bi-shield-lock", label: "24/7 Security", delay: 1700 },
    { icon: "bi-flower2", label: "Garden Area", delay: 1900 },
    { icon: "bi-fire", label: "BBQ Facilities", delay: 2000 },
    { icon: "bi-brush", label: "Daily Housekeeping", delay: 2100 },
    { icon: "bi-map", label: "Travel Assistance", delay: 2200 },
  ];


  return (
     <>
      <Head>
        <title>About Us | Udawalawe Elegarden Safari Resort - Luxury Hotel in Sri Lanka</title>
        <meta name="description" content="Learn about Udawalawe Elegarden Safari Resort — a nature-inspired luxury hotel near Udawalawe National Park, Sri Lanka. Discover our story, services, and team." />
        <meta name="keywords" content="about Udawalawe hotel, Elegarden resort, luxury safari resort Sri Lanka, Udawalawe accommodation, hotel amenities Sri Lanka, eco resort Udawalawe" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://udawalaweelegardenhotelandsafari.com/about" />

        <meta property="og:title" content="About Us | Udawalawe Elegarden Safari Resort" />
        <meta property="og:description" content="Nestled near Udawalawe National Park, our resort blends comfort, charm, and nature for truly unforgettable stays." />
        <meta property="og:image" content="https://udawalaweelegardenhotelandsafari.com/logo.jpg" />
        <meta property="og:image:alt" content="About Udawalawe Elegarden Safari Resort" />
        <meta property="og:url" content="https://udawalaweelegardenhotelandsafari.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Udawalawe Elegarden Safari Resort" />
        <meta name="twitter:description" content="Nestled near Udawalawe National Park, our resort blends comfort, charm, and nature for truly unforgettable stays." />
        <meta name="twitter:image" content="https://udawalaweelegardenhotelandsafari.com/logo.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Udawalawe Elegarden Safari Resort",
            "url": "https://udawalaweelegardenhotelandsafari.com/about",
            "description": "Udawalawe Elegarden Safari Resort is a luxury hotel near Udawalawe National Park, Sri Lanka, offering comfortable rooms, fine dining, and guided safari tours.",
            "mainEntity": {
              "@type": "LodgingBusiness",
              "name": "Udawalawe Elegarden Safari Resort",
              "telephone": "+94765603802",
              "url": "https://udawalaweelegardenhotelandsafari.com"
            }
          })}
        </script>
      </Head>
      
      <CustomNavbar />

      {/* Hero Section */}
      <div className="about-hero-section" style={{ position: 'relative', width: '100vw', height: '400px', background: `url(${slider1.src}) no-repeat center center/cover` }}>
        <div className="hero-overlay">
          <h1 className="text-center text-white fw-bold" data-aos="fade-up" data-aos-delay="200">About Us</h1>
          <p className="text-center text-white" data-aos="fade-up" data-aos-delay="300">
            Nestled near the heart of Udawalawe, our hotel blends comfort, charm, and nature to create unforgettable stays for every guest.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="about-content" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <Container>
          <Row className="mb-4 manual_text_left">
            <Col xs={12} md={6}>
              <h2 className='fw-bold text-primary-emphasis' data-aos="zoom-in" data-aos-delay="200">About Udawalawa Elegarden Hotel</h2>
              <p data-aos="flip-up" data-aos-delay="300">
                Nestled in the heart of nature, Udawalawa Elegarden Hotel offers the perfect blend of comfort, convenience, and adventure. Whether you're here 
                to relax or explore, our hotel is your ideal getaway.
              </p>
              <p data-aos="flip-up" data-aos-delay="400">
                Enjoy our spacious and comfortable rooms, thoughtfully designed to make you feel at home. Savor delicious local and international cuisine at our 
                in-house restaurant, where every meal is crafted with care. For wildlife lovers, we offer guided Udawalawa Safari Tours, providing an unforgettable 
                chance to witness elephants and exotic animals in their natural habitat.
              </p>
              <p data-aos="flip-up" data-aos-delay="500">
                At Udawalawa Elegarden Hotel, your experience is our passion. Come as a guest—leave as family.
              </p>
            </Col>
            <Col xs={12} md={6} data-aos="fade-up" data-aos-delay="200">
              <img
                src={aboutImage.src}
                alt="About Us"
                className="img-fluid rounded"
                style={{ cursor: 'pointer' }}
                onClick={handleOpen}
              />
              <p className="text-muted small text-center mt-2"><FaSearchPlus className="me-1" />Click to enlarge</p>
            </Col>
          </Row>

          <Modal show={showModal} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton>
              {/* <Modal.Title>Full Image</Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
              <img src={aboutImage} alt="Full Size" className="img-fluid w-100" />
            </Modal.Body>
          </Modal>

          <section className="container py-5">
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="col text-center"
                  data-aos="zoom-in"
                  data-aos-delay={service.delay}
                >
                  <i className={`bi ${service.icon} fs-1`} style={{color: '#bd8400ff'}}></i>
                  <p className="mt-2 text-muted small">{service.label}</p>
                </div>
              ))}
            </div>
          </section>

          <Row className="mb-4">
            <Col xs={12} md={4} data-aos="fade-up" data-aos-delay="200">
              <Card className="text-center">
                <Card.Body>
                  <FaCheckCircle size={50} color="#007BFF" />
                  <Card.Title className='text-primary-emphasis'>Quality Service</Card.Title>
                  <Card.Text>
                    We prioritize quality in everything we do to ensure our customers have the best experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} data-aos="fade-up" data-aos-delay="400">
              <Card className="text-center">
                <Card.Body>
                  <FaInfoCircle size={50} color="#28A745" />
                  <Card.Title className='text-primary-emphasis'>Experienced Team</Card.Title>
                  <Card.Text>
                    Our team has years of experience, ensuring your every need is met with expertise and care.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} data-aos="fade-up" data-aos-delay="600">
              <Card className="text-center">
                <Card.Body>
                  <FaRegStar size={50} color="#FFC107" />
                  <Card.Title className='text-primary-emphasis'>Customer Satisfaction</Card.Title>
                  <Card.Text>
                    We are committed to providing exceptional service and ensuring every customer is satisfied.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Call to Action */}
          <div className="cta-section text-center">
            <h3 className='fw-bold text-warning-emphasis' data-aos="fade-up" data-aos-delay="200">Ready to Experience the Best?</h3>
            <p data-aos="fade-up" data-aos-delay="400">Join us for an unforgettable experience. Book a tour with us today!</p>
            <Button className='btn-warning text-dark fw-bold' href="/contact#book_now" data-aos="fade-up" data-aos-delay="600">Book Now</Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default About;

