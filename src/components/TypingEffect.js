import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import OverviewBox from "./Overview";
import "./dashboard.css"; // Make sure to include your CSS styles

const TypingEffect = () => {
  const [stage, setStage] = useState(0);
  const typingRef = useRef(null);

  useEffect(() => {
    if (stage === 0 || stage === 2) {
      // Only during typing animations
      const typingElement = typingRef.current;
      const handleAnimationEnd = () => {
        setTimeout(() => {
          setStage((prevStage) => prevStage + 1);
        }, 1500);
        // Proceed to next stage
      };
      typingElement.addEventListener("animationend", handleAnimationEnd);

      return () => {
        typingElement.removeEventListener("animationend", handleAnimationEnd);
      };
    } else if (stage === 1) {
      // After the first header is shown
      setTimeout(() => {
        setStage(2); // Proceed to second typing animation
      }, 1000); // Duration header is shown
    }
  }, [stage]);

  return (
    <div>
      <div className="wrapper">
        {stage === 0 && (
          <div className="typing-demo code" ref={typingRef}>
            👉🏻&nbsp;What's my Name?
          </div>
        )}
        {stage >= 1 && (
          <h3>
            Hi,
            <br />
            <span className="titlespan">
              This is
              <span className="hispan">&nbsp;Pardha Saradhi Chodey!</span>
            </span>{" "}
          </h3>
        )}
      </div>
      <br />
      <div className="wrapper">
        {stage === 2 && (
          <div className="typing-demo1 code" ref={typingRef}>
            👉🏻&nbsp;Who Am I?
          </div>
        )}
        {stage >= 3 && (
          <div>
            <h3 className="code">Innovative Full Stack Developer</h3>
            <h5 className="code">– Transforming Ideas into Digital Reality</h5>
          
            <Container>
              <Row>
              <Col md={3}><h3>HighLights</h3></Col>
              <Col md={3}><img className="image" src={process.env.PUBLIC_URL +"/arrow.png"} alt="arrow" height={'100px'}/></Col></Row>
              
              <Row>
                <Col md={1}></Col>
                <Col md={10}><OverviewBox /></Col>
              </Row>
            </Container>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default TypingEffect;
