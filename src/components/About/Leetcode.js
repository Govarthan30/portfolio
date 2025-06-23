import { useEffect, useState } from "react";

const LeetCode = () => {
  const [stats, setStats] = useState({
    username: "Govarthan_30",
    totalSolved: 1,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    ranking: 0,
    languageStats: {},
  });

  useEffect(() => {
    fetch("https://leetcode-stats-api.vercel.app/Govarthan_30")
      .then((res) => res.json())
      .then((data) => {
        setStats({
          username: "Govarthan_30",
          totalSolved: data.totalSolved || 1,
          easySolved: data.easySolved || 0,
          mediumSolved: data.mediumSolved || 0,
          hardSolved: data.hardSolved || 0,
          ranking: data.ranking || 0,
          languageStats: data.languageProblemCount || {},
        });
      })
      .catch((err) => console.error("Error fetching LeetCode stats:", err));
  }, []);

  const radius = 60;
  const stroke = 10;
  const totalCircumference = 2 * Math.PI * radius;
  const total = stats.totalSolved || 1;
  const easyPerc = stats.easySolved / total;
  const mediumPerc = stats.mediumSolved / total;
  const hardPerc = stats.hardSolved / total;

  const dashEasy = totalCircumference * easyPerc;
  const dashMedium = totalCircumference * mediumPerc;
  const dashHard = totalCircumference * hardPerc;

  return (
    <div
      style={{
        background: "#121212",
        color: "#fff",
        fontFamily: `'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif'`,
        textAlign: "center",
        padding: 20,
      }}
    >
      <h2 style={{ color: "#00ffd5", fontSize: "1.8rem", fontWeight: 600 }}>
        <a
          href="https://leetcode.com/Govarthan_30/"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            color: "#00ffd5",
            fontFamily: "inherit",
          }}
        >
          {stats.username}'s LeetCode Stats
        </a>
      </h2>

      <svg width="180" height="180" viewBox="0 0 180 180">
        <circle
          cx="90"
          cy="90"
          r={radius}
          stroke="#333"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx="90"
          cy="90"
          r={radius}
          stroke="#4caf50"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={`${dashEasy} ${totalCircumference}`}
          strokeDashoffset="0"
          transform="rotate(-90 90 90)"
        />
        <circle
          cx="90"
          cy="90"
          r={radius}
          stroke="#ffa726"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={`${dashMedium} ${totalCircumference}`}
          strokeDashoffset={`-${dashEasy}`}
          transform="rotate(-90 90 90)"
        />
        <circle
          cx="90"
          cy="90"
          r={radius}
          stroke="#ef5350"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={`${dashHard} ${totalCircumference}`}
          strokeDashoffset={`-${dashEasy + dashMedium}`}
          transform="rotate(-90 90 90)"
        />
        <text
          x="90"
          y="90"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="16"
          fill="#fff"
          fontFamily="inherit"
        >
          {Math.round((total / 2500) * 100)}%
        </text>
      </svg>

      <div
        style={{
          marginTop: 20,
          textAlign: "left",
          maxWidth: 400,
          marginInline: "auto",
          fontSize: "15px",
          lineHeight: 1.6,
        }}
      >
        <p style={{ color: "#4caf50" }}>
          🟢 <strong>Easy:</strong> {stats.easySolved}
        </p>
        <p style={{ color: "#ffa726" }}>
          🟠 <strong>Medium:</strong> {stats.mediumSolved}
        </p>
        <p style={{ color: "#ef5350" }}>
          🔴 <strong>Hard:</strong> {stats.hardSolved}
        </p>
        <p>
          📌 <strong>Total Solved:</strong> {stats.totalSolved}
        </p>
        <p>
          🥇 <strong>Global Rank:</strong>{" "}
          {stats.ranking ? `#${stats.ranking.toLocaleString()}` : "N/A"}
        </p>

        {Object.keys(stats.languageStats).length > 0 && (
          <div style={{ marginTop: 20 }}>
            <strong style={{ fontSize: "16px" }}>Top Languages:</strong>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 8,
              }}
            >
              {Object.entries(stats.languageStats)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 6)
                .map(([lang, count]) => (
                  <span
                    key={lang}
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      padding: "6px 12px",
                      borderRadius: 12,
                      fontSize: "13px",
                      color: "#ccc",
                      fontWeight: 500,
                    }}
                  >
                    {lang}: <b style={{ color: "#fff" }}>{count}</b>
                  </span>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeetCode;
