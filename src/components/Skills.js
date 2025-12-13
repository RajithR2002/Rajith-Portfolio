import javascriptLogo from "../assets/img/javascript-logo.png";
import htmlLogo from "../assets/img/html-logo.png";
import cssLogo from "../assets/img/css-logo.png";

import cLogo from "../assets/img/c++-logo.png";
import arduinoLogo from "../assets/img/arduino-logo.png";
import reactLogo from "../assets/img/react-logo.png";
import gitLogo from "../assets/img/git-logo.png";

import luaLogo from "../assets/img/lua-logo.png";
import blenderLogo from "../assets/img/blender-logo.png";
import robloxStudioLogo from "../assets/img/roblox-studio-logo.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I have built my experience by moving between creative tooling and programming environments, developing a versatile foundation that supports everything from interactive systems to visual design.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <img src={javascriptLogo} alt="JavaScript Logo" />
                            <h5>JavaScript</h5>
                        </div>
                        <div className="item">
                            <img src={htmlLogo} alt="HTML Logo" />
                            <h5>HTML</h5>
                        </div>
                        <div className="item">
                            <img src={cssLogo} alt="CSS Logo" />
                            <h5>CSS</h5>
                        </div>
                        <div className="item">
                            <img src={cLogo} alt="C++ Logo" />
                            <h5>C++</h5>
                        </div>
                        <div className="item">
                            <img src={arduinoLogo} alt="Arduino Logo" />
                            <h5>Arduino</h5>
                        </div>
                        <div className="item">
                            <img src={reactLogo} alt="React Logo" />
                            <h5>React</h5>
                        </div>
                        <div className="item">
                            <img src={gitLogo} alt="Git Logo" />
                            <h5>Git</h5>
                        </div>
                        <div className="item">
                            <img src={luaLogo} alt="Lua Logo" />
                            <h5>Lua</h5>
                        </div>
                        <div className="item">
                            <img src={robloxStudioLogo} alt="Roblox Studio Logo" />
                            <h5>Roblox Studio</h5>
                        </div>
                        <div className="item">
                            <img src={blenderLogo} alt="Blender Logo" />
                            <h5>Blender</h5>
                        </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
    )
}