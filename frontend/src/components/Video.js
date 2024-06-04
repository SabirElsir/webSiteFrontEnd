import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/VideoWithArticle.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const data = [
  {
    id: 1,

    videoSrc: "/Videos/video.mp4",
  },
  {
    id: 2,

    title: "Card Title 2",
    text: (
      <p>
        " SabirElsir for Engineering Consultations Office is managed by Eng
        Sabir ElSir who has been involved in the Engineering industry for over
        12 years. ElSir is experienced enough to oversee the firm,He had BSc of
        Architecture & Urban Planning from Sharg ElNiel University, having
        previously worked as a teacher in Khartoum Practical Collage . A general
        manager for SabirElsir for Engineering Consultations office. Eng. ElSir
        has obtained Post graduate degrees and qualifications in aspects related
        to the fields of architecture engineering. He owned MSc. in Construction
        Management fromUniversity of AlZaeemAlAzhari..",
      </p>
    ),
  },
];

function Grid() {
  return (
    <Row xs={1} md={1} className="g-4">
      {data.map((item) => (
        <Col key={item.id}>
          <Card>
            <Card.Img variant="top" src={item.imgSrc} />
            <Card.Body>
              <div className="iframe-container">
                <iframe
                  className="responsive-iframe"
                  src={item.videoSrc}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={item.title}
                ></iframe>
              </div>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Grid;
