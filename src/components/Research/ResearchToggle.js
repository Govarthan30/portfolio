import React from "react";

function ResearchToggle({ activeTab, setActiveTab }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "40px",
      }}
    >
      <label className="research-switch">
        <input
          type="checkbox"
          checked={activeTab === "patents"}
          onChange={(e) =>
            setActiveTab(
              e.target.checked ? "patents" : "papers"
            )
          }
        />

        <span className="slider">
          <span className="label-left">
            Papers
          </span>

          <span className="label-right">
            Patents
          </span>
        </span>
      </label>
    </div>
  );
}

export default ResearchToggle;