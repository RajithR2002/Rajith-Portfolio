import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import bannerVideo from '../assets/vids/banner3-video.mp4';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Student"];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
    
    return (
        <section className="banner" id="home">
            <video className="banner-video" autoPlay muted loop playsInline>
                <source src={bannerVideo} type="video/mp4" />
            </video>
            <div className="banner-content">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>
                                {`Hi I'm Rajith,`}<br />
                                {`a `}<span className="wrap">{text}</span>
                            </h1>
                            <p>I am Rajith Rajathurai, a Software Engineering student at ÉTS. I built this portfolio to document my progress as a developer and to showcase the systems, games, and tools I have created while growing my technical skill set. Welcome!</p>
                            <a 
                                href="https://www.linkedin.com/in/rajith-rajathurai-9415a6252/"
                                style={{ textDecoration: "none" }}
                                >
                                <button>
                                    Let’s Connect <ArrowRightCircle size={35} />
                                </button>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
        
    )
}

