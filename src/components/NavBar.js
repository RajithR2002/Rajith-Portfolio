import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setActiveLink(value);
    document.title = `Rajith Rajathurai - ${capitalizedValue}`;
  }

  useEffect(() => {
    onUpdateActiveLink('home');
  }, []);

  return (

    
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>

          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#highlights" className={activeLink === 'highlights' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('highlights')}>Highlights</Nav.Link>
          </Nav>

          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rajith-rajathurai-9415a6252/"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/RajithR2002"><img src={navIcon2} alt="" /></a>
            </div>
          </span>
          
        </Container>
      </Navbar>
  )
}