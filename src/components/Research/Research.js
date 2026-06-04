import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import Particle from "../Particle";
import PaperCard from "./PaperCard";
import PatentCard from "./PatentCard";
import ResearchToggle from "./ResearchToggle";

import "./Research.css";

function Research() {
  const [activeTab, setActiveTab] = useState("papers");
  const [selectedInterest, setSelectedInterest] = useState("All");

const papers = [
  {
    title:
      "A Scalable Blockchain-Enabled Federated Learning Framework for Privacy, Trust, and Efficiency in Edge Environments",

    authors:
      "Govarthan V, Bakiyalakshmi S, Banu R, Deva Dharshini K S",

    year: "2025",

    domain: "Blockchain + Federated Learning",

    description:
      "Scalable blockchain-enabled federated learning framework for privacy preservation, trust management, model integrity, and resource-efficient edge AI.",

    ieeeLink:
      "https://doi.org/10.1109/ICDISS68238.2025.11320699",

    scholarLink:
      "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=B8JHW0MAAAAJ&citation_for_view=B8JHW0MAAAAJ:u5HHmVD_uO8C"
  },

  {
    title:
      "TinyML on Microcontrollers: Enabling Energy-Efficient, Real-Time, Privacy-Preserving Incremental Learning for Embedded Systems",

    authors:
      "Govarthan V, M. Thangamani, R. Aarthi, S. Satheesh, M. Moorthy, Kavitha V. Kakade",

    year: "2025",

    domain: "TinyML + Embedded AI",

    description:
      "Lightweight TinyML framework supporting real-time on-device incremental learning on constrained microcontrollers with improved energy efficiency.",

    ieeeLink:
      "https://doi.org/10.1109/ICSCN67106.2025.11308574",

    scholarLink:
      "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=B8JHW0MAAAAJ&citation_for_view=B8JHW0MAAAAJ:u-x6o8ySG0sC"
  },

  {
    title:
      "Enhancing Transparency and Fairness in AI-Driven Financial Decision Systems Using Explainable AI Frameworks",

    authors:
      "Govarthan V, M. Thangamani, V John Peter, S. Tamizharasu, Rajasekhara Babu L, R. Manjula Devi",

    year: "2026",

    domain: "Explainable AI + FinTech",

    description:
      "Comprehensive XAI framework integrating interpretability, bias mitigation, auditing and compliance-aware AI for financial decision systems.",

    ieeeLink: "https://ieeexplore.ieee.org/document/11497969"
  },

  {
    title:
      "Sybil-Resistant Decentralized Blockchain-Enabled Federated Learning for Edge AI: Robustness and Incentive Mechanisms",

    authors:
      "Vishnukumar A, Govarthan V, Deva Dharshini K S, Barath S, Yuvanesh V, Suvathika K",

    year: "2025",

    domain: "Blockchain + Federated Learning + Security",

    description:
      "SyDeLP framework integrating adaptive proof-of-work, Byzantine-tolerant aggregation and blockchain incentives to defend against Sybil attacks.",

    ieeeLink:
      "https://doi.org/10.1109/ICSTSN67075.2025.11398054"
  },

  {
    title:
      "Neuromorphic Spiking Neural Network-Based Explainable AI for Energy-Efficient, Quantum-Resistant Dynamic Access Control Systems with Temporal Causal Traceability",

    authors:
      "Vishnukumar A, Dinesh B, Harini Pachaiyappan, Govarthan V, Lakshmi Priya V, Suvathika K",

    year: "2025",

    domain: "Neuromorphic AI + Cybersecurity",

    description:
      "Neuromorphic spiking neural network framework integrating explainable AI and post-quantum cryptography for secure access control.",

    ieeeLink:
      "https://doi.org/10.1109/COMPUTINGCON64838.2025.11377285"
  },

  {
    title:
      "Self-Supervised Vision Transformers for Few-Shot Medical Image Segmentation in Resource-Constrained Edge Devices",

    authors:
      "Vishnukumar A, M Kavitha, K Amsavalli, Govarthan V, Barath S, Suvathika K",

    year: "2026",

    domain: "Computer Vision + Medical AI",

    description:
      "Self-supervised Vision Transformer architecture enabling few-shot medical image segmentation with efficient deployment on edge devices.",

    ieeeLink: "https://ieeexplore.ieee.org/document/11504877"
  },
  {
  title:
    "Federated Learning-Enabled Inverse Design of Photonic Crystals with Blockchain-Secured Collaboration for Next-Generation AI Hardware",

  authors:
    "Govarthan V, M. Thangamani, D. Anandakumar, S. Tamizharasu, Rajasekhara Babu L, K. Gandhimathi",

  year: "2026",

  domain:
    "Blockchain,Federated Learning,AI Hardware",

  description:
    "A decentralized framework combining federated learning, blockchain, and neural architecture search to enable secure, privacy-preserving inverse design of photonic crystals for next-generation AI hardware. The framework improves design accuracy, collaboration security, and training efficiency while eliminating centralized data sharing.",

  ieeeLink:
    "https://doi.org/10.1117/12.3108775"
}
];

  const patents = [
    {
      title: "Smart Helmet Behavioral Safety System",

      year: "2026",

      status: "Patent Ready",

      description:
        "IMU-based rider safety framework with adaptive haptic feedback."
    },

    {
      title: "Transparent Credit Score Platform",

      year: "2026",

      status: "Research Stage",

      description:
        "Blockchain-powered transparent and auditable credit score management platform."
    }
  ];

  const interests = [
    "All",
    "Blockchain",
    "Federated Learning",
    "TinyML",
    "Edge AI",
    "Computer Vision",
    "Medical AI",
    "Explainable AI",
    "Cyber Security",
    "Neuromorphic AI",
    "FinTech AI",
    "AI Hardware"
  ];

  const filteredPapers =
    selectedInterest === "All"
      ? papers
      : papers.filter((paper) =>
          paper.domain
            .toLowerCase()
            .includes(selectedInterest.toLowerCase())
        );

  return (
    <Container fluid className="project-section">
      <Particle />

      <Container className="research-content">
        <h1 className="project-heading">
          Research <strong className="purple">Portfolio</strong>
        </h1>

        <p style={{ color: "white" }}>
          Publications, patents, innovations and academic contributions.
        </p>

        {/* Stats */}

        <Row className="research-stats">
          <Col md={4}>
            <div className="stat-box">
              <h2>{papers.length}</h2>
              <p>Publications</p>
            </div>
          </Col>

          <Col md={4}>
            <div className="stat-box">
              <h2>{patents.length}</h2>
              <p>Patents</p>
            </div>
          </Col>

          <Col md={4}>
            <div className="stat-box">
              <h2>{interests.length - 1}</h2>
              <p>Research Domains</p>
            </div>
          </Col>
        </Row>

        {/* Academic Profiles */}

        <div className="research-profiles">
          <Button
            variant="outline-primary"
            href="https://ieeexplore.ieee.org/author/234400164713134"
            target="_blank"
          >
            IEEE Profile
          </Button>

          <Button
            variant="outline-primary"
            href="https://scholar.google.com/citations?user=B8JHW0MAAAAJ&hl=en&oi=ao"
            target="_blank"
          >
            Google Scholar
          </Button>

          <Button
            variant="outline-primary"
            href="https://orcid.org/0009-0004-9119-0942"
            target="_blank"
          >
            ORCID
          </Button>
        </div>

        {/* Toggle */}

        <ResearchToggle
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Filters only for Papers */}

        {activeTab === "papers" && (
          <div className="research-interests">
            {interests.map((interest) => (
              <button
                key={interest}
                className={
                  selectedInterest === interest
                    ? "interest-chip active-chip"
                    : "interest-chip"
                }
                onClick={() =>
                  setSelectedInterest(interest)
                }
              >
                {interest}
              </button>
            ))}
          </div>
        )}

        {/* Content */}

        <Row
          style={{
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {activeTab === "papers" &&
            filteredPapers.map((paper, index) => (
              <Col
                lg={4}
                md={6}
                sm={12}
                className="project-card"
                key={index}
              >
                <PaperCard {...paper} />
              </Col>
            ))}

          {activeTab === "patents" &&
            patents.map((patent, index) => (
              <Col
                lg={4}
                md={6}
                sm={12}
                className="project-card"
                key={index}
              >
                <PatentCard {...patent} />
              </Col>
            ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Research;