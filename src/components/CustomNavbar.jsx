// src/components/CustomNavbar.jsx
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';
import logo from '../assets/logo.jpg'; 

function CustomNavbar() {
  const router = useRouter();

  // Helper function to set active class
  const getNavLinkClass = (path) =>
    router.pathname === path ? 'fw-bold text-warning-emphasis text-shadow' : '';

  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>

        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand>
            <img
              src={logo.src}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Udawalawe Elegarden Safari Resort"
            />{' '}
            <span className='fw-bold' style={{textShadow: '0 0 4px var(--bs-warning-text-emphasis)'}}>Udawalawe Elegarden Safari Resort</span>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Link href="/" passHref legacyBehavior><Nav.Link className={`${getNavLinkClass('/')} fw-semibold`}>Home</Nav.Link></Link>
            <Link href="/about" passHref legacyBehavior><Nav.Link className={`${getNavLinkClass('/about')} fw-semibold`}>About</Nav.Link></Link>
            <Link href="/contact" passHref legacyBehavior><Nav.Link className={`${getNavLinkClass('/contact')} fw-semibold`}>Contact</Nav.Link></Link>
            <Link href="/RoomDetails" passHref legacyBehavior><Nav.Link className={`${getNavLinkClass('/RoomDetails')} fw-semibold`}>Room Details</Nav.Link></Link>
            <Link href="/Restaurant" passHref legacyBehavior><Nav.Link className={`${getNavLinkClass('/Restaurant')} fw-semibold`}>Restaurant</Nav.Link></Link>
            <Link href="/SafariTours" passHref legacyBehavior><Nav.Link className={`${getNavLinkClass('/SafariTours')} fw-semibold`}>Safari Tours</Nav.Link></Link>
            <Link href="/Gallery" passHref legacyBehavior><Nav.Link className={`${getNavLinkClass('/Gallery')} fw-semibold`}>Gallery</Nav.Link></Link>

            <div className="ms-3">
              <Link href="/#book_now" className="btn text-light" style={{background: '#664d03', boxShadow: '0 0 5px'}}>Book Now</Link>
            </div>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
