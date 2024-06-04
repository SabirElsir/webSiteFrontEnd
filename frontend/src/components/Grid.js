import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../styles/Gird.css";

const data = [
  {
    id: 1,
    imgSrc: "../images/4.jpg",
    videoSrc: "../Videos/.mp4",
    title: "Card Title 1",
    text: "This is the first card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    id: 2,
    imgSrc: "../images/3.jpg",

    title: "Card Title 2",
    text: "This is the second card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
];
function Grid() {
  return (
    <div className="cards">
      <Row xs={1} md={2} className="g-4">
        {data.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.imgSrc} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Grid;
