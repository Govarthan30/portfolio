import React from "react";
import Card from "react-bootstrap/Card";

function PatentCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <div
          style={{
            fontSize: "50px",
            textAlign: "center",
            marginBottom: "10px"
          }}
        >
          🏆
        </div>

        <Card.Title>
          {props.title}
        </Card.Title>

        <div style={{ marginBottom: "15px" }}>
          <span className="badge bg-warning text-dark">
            {props.status}
          </span>

          <span
            className="badge bg-secondary"
            style={{ marginLeft: "10px" }}
          >
            {props.year}
          </span>
        </div>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PatentCard;