import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { FaGoogle, FaBookOpen } from "react-icons/fa";
import { SiOrcid, SiScopus } from "react-icons/si";

function PaperCard(props) {
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
          📝
        </div>

        <Card.Title>
          {props.title}
        </Card.Title>

        <div style={{ marginBottom: "15px" }}>
          <span className="badge bg-primary">
            {props.year}
          </span>

          <span
            className="badge bg-secondary"
            style={{ marginLeft: "10px" }}
          >
            {props.domain}
          </span>
        </div>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Card.Text style={{ color: "#bdbdbd" }}>
          <strong>Authors:</strong>
          <br />
          {props.authors}
        </Card.Text>

        {props.ieeeLink && (
          <Button
            variant="primary"
            href={props.ieeeLink}
            target="_blank"
          >
            <FaBookOpen />
            &nbsp; IEEE
          </Button>
        )}

        {props.scholarLink && (
          <Button
            variant="primary"
            href={props.scholarLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FaGoogle />
            &nbsp; Scholar
          </Button>
        )}

        {props.orcidLink && (
          <Button
            variant="primary"
            href={props.orcidLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <SiOrcid />
            &nbsp; ORCID
          </Button>
        )}

        {props.scopusLink && (
          <Button
            variant="primary"
            href={props.scopusLink}
            target="_blank"
            style={{
              marginLeft: "10px",
              marginTop: "10px"
            }}
          >
            <SiScopus />
            &nbsp; Scopus
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default PaperCard;