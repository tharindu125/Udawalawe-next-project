import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import Link from 'next/link';
import logo from '../assets/logo.jpg';

function Footer() {
  return (
    <footer className="text-light pt-5 pb-4 footer" style={{ backgroundColor: 'rgb(0, 5, 27) ' }}>
      <Container>
        <Row>
          {/* Logo & Company Info */}
          <Col md={3} className="mb-4">
            <div className="align-items-center mb-3 " data-aos="zoom-in" data-aos-delay="200">
              <img
                src={logo.src}
                alt="Logo"
                width="100"
                height="100"
                className="me-2"
              />
              {/* <h5 className="mb-0">Udawalawe Elegarden Safari Resort</h5> */}
            </div>
            <p data-aos="fade-up" data-aos-delay="200">Experience nature and comfort in the heart of Udawalawe. Perfect for your safari adventure and peaceful stay.</p>
          </Col>

          {/* Useful Links */}
          <Col md={3} className="mb-4">
            <h5 className='text-warning-emphasis' data-aos="fade-up" data-aos-delay="200">Useful Links</h5>
            <ul className="list-unstyled">
              <li data-aos="fade-up" data-aos-delay="300"><Link href="/about" className="text-light text-decoration-none">About Us</Link></li>
              <li data-aos="fade-up" data-aos-delay="400"><Link href="/contact" className="text-light text-decoration-none">Contact</Link></li>
              <li data-aos="fade-up" data-aos-delay="500"><Link href="/RoomDetails" className="text-light text-decoration-none">Room Details</Link></li>
              <li data-aos="fade-up" data-aos-delay="600"><Link href="/Restaurant" className="text-light text-decoration-none">Restaurant</Link></li>
              <li data-aos="fade-up" data-aos-delay="700"><Link href="/SafariTours" className="text-light text-decoration-none">Safari Tours</Link></li>
              <li data-aos="fade-up" data-aos-delay="800"><Link href="/Gallery" className="text-light text-decoration-none">Gallery</Link></li>
            </ul>
          </Col>

          {/* Main Categories */}
          <Col md={3} className="mb-4">
            <h5 className='text-warning-emphasis' data-aos="fade-up" data-aos-delay="200">Main Categories</h5>
            <ul className="list-unstyled">
              <li data-aos="fade-up" data-aos-delay="300">Luxury Rooms</li>
              <li data-aos="fade-up" data-aos-delay="400">Safari Packages</li>
              <li data-aos="fade-up" data-aos-delay="500">Local Cuisine</li>
            </ul>
          </Col>
         
         {/* Contact Details */}
          <Col md={3} className="mb-4">
            <h5 className='text-warning-emphasis' data-aos="fade-up" data-aos-delay="200">Contact Us</h5>
            <p data-aos="fade-up" data-aos-delay="300" style={{fontSize: '12px'}}><FaEnvelope /> info@udawalaweelegardenhotelandsafari.com</p>
            <p data-aos="fade-up" data-aos-delay="400"><FaPhone /> +94 76 560 3802</p>
            <div data-aos="fade-up" data-aos-delay="500">
              <a href="#" className="text-light me-3"><FaFacebook /></a>
              <a href="#" className="text-light me-3"><FaInstagram /></a>
              <a href="#" className="text-light"><FaTwitter /></a>
            </div>
          </Col>
        </Row>
        <hr className="border-light"/>
        <p className="text-center">© {new Date().getFullYear()} Udawalawe Elegarden Safari Resort. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
