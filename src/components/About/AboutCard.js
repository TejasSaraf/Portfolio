import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Folks, My name is <span className="purple">Tejas Saraf </span>
            I am from <span className="purple"> Maharashtra, India.</span>
            <br />I am a pursuing Bachelor of Technology from G H Raisoni
            Institute Of Engineering And Technology, Pune.
            <br />
            <br />
            My Specialization is Information Technology.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
