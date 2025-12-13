import { Container, Row, Col } from "react-bootstrap";
import arrow1 from "../assets/img/arrow1.svg";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer footer-with-button">
      <Container>
        <Row className="align-items-center">

          <Col size={12} sm={12} className="text-end position-relative">
            <button 
              className="scroll-top-circle footer-scroll-btn"
              onClick={scrollToTop}
            >
              <img src={arrow1} alt="Arrow Up" className="arrow-img"/>
            </button>
          </Col>
        </Row>

        <Row>
          <Col size={12} className="credits text-center">
            <p>
             Banner Video by <a href="https://www.freepik.com/free-video/motion-graphic-gradient-blue-background_3293831#fromView=popular&page=2&position=45&uuid=2eaa838d-b11b-456d-b6af-481ac0c15dad">freepik</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};