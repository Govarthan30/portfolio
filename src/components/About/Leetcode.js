import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

const LeetCode = ({ username = "Govarthan_30" }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4 }
    );
    const current = componentRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://leetcode-stats-api.vercel.app/${username}`);
        if (!res.ok) throw new Error("User not found or API issue.");
        const data = await res.json();
        if (data.status === "error") throw new Error(data.message);
        setStats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setTimeout(() => setLoading(false), 2000); // Delay to show animation
      }
    };
    fetchStats();
  }, [username]);

  const handleMouseMove = (e) => {
    if (!componentRef.current) return;
    const { left, top, width, height } = componentRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    const tiltElement = componentRef.current.firstChild;
    if (tiltElement) {
      tiltElement.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    }
  };

  const handleMouseLeave = () => {
    if (!componentRef.current) return;
    const tiltElement = componentRef.current.firstChild;
    if (tiltElement) {
      tiltElement.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    }
  };

  const renderLiquid = () => {
    const { easySolved, mediumSolved, hardSolved, totalSolved } = stats;
    const total = totalSolved || 1;
    const h = (hardSolved / total) * 100;
    const m = ((mediumSolved + hardSolved) / total) * 100;
    const e = 100;

    return (
      <>
        <div className="liquid-fill" style={{ background: 'var(--easy-color)', height: `${e - m}%`, animationDelay: '0s' }} />
        <div className="liquid-fill" style={{ background: 'var(--medium-color)', height: `${m - h}%`, animationDelay: '0.5s' }} />
        <div className="liquid-fill" style={{ background: 'var(--hard-color)', height: `${h}%`, animationDelay: '1s' }} />
      </>
    );
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div style={styles.centered}>
          <div className="loader-name">{'🚀 My LeetCode Profile'}</div>
          <div className="loader-typing">Fetching LeetCode Data...</div>
        </div>
      );
    }

    if (error) {
      return (
        <div style={styles.centered}>
          <p style={styles.errorText}>⚠️ Connection Error</p>
          <p style={styles.errorSubText}>{error}</p>
        </div>
      );
    }

    if (stats) {
      const { easySolved, mediumSolved, hardSolved, totalSolved, ranking } = stats;

      return (
        <div style={{ ...styles.tiltContainer, ...(isVisible ? styles.visible : styles.hidden) }}>
          <div style={styles.header}>
            <img src="https://assets.leetcode.com/static_assets/public/images/LeetCode_logo_rvs.png" alt="LeetCode" style={styles.logo} />
            <span style={styles.username}>{'🚀 My LeetCode Profile'}</span>
          </div>

          <div style={styles.orbContainer}>
            <div style={{ ...styles.orb, ...(isVisible ? styles.orbVisible : {}) }}>
              <div className="leet-liquid-stack">{isVisible && renderLiquid()}</div>
              <div style={styles.orbContent}>
                <span style={styles.totalValue}><CountUp end={totalSolved} duration={2.5} separator="," /></span>
                <span style={styles.totalLabel}>Problems Solved</span>
              </div>
            </div>
          </div>

          <div style={styles.statsGrid}>
            <div style={styles.statItem}><span style={{ ...styles.dot, background: 'var(--easy-color)' }}></span>Easy<span style={styles.statValue}><CountUp end={easySolved} duration={2} /></span></div>
            <div style={styles.statItem}><span style={{ ...styles.dot, background: 'var(--medium-color)' }}></span>Medium<span style={styles.statValue}><CountUp end={mediumSolved} duration={2} /></span></div>
            <div style={styles.statItem}><span style={{ ...styles.dot, background: 'var(--hard-color)' }}></span>Hard<span style={styles.statValue}><CountUp end={hardSolved} duration={2} /></span></div>
          </div>

          <div style={styles.rankContainer}>
            🏆 Global Rank: <strong style={styles.rankValue}><CountUp end={ranking} duration={2} separator="," prefix="#" /></strong>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      ref={componentRef}
      style={styles.card}
      onClick={() => window.open(`https://leetcode.com/${username}`, "_blank")}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {renderContent()}
      <style>{`
        :root {
          --easy-color: #00C853;
          --medium-color: #FFAB00;
          --hard-color: #F44336;
          --glow-color: rgba(0, 255, 213, 0.7);
        }

        .leet-liquid-stack {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column-reverse;
          overflow: hidden;
          border-radius: 50%;
          clip-path: ellipse(50% 50% at 50% 50%);
        }

        .liquid-fill {
          width: 100%;
          transform: translateY(100%);
          animation: pour 1.4s ease-out forwards;
        }

        @keyframes pour {
          to { transform: translateY(0); }
        }

        .loader-name {
          font-size: 28px;
          font-weight: bold;
          color: white;
        }

        .loader-typing {
          color: #ccc;
          margin-top: 10px;
          font-family: 'Courier New', monospace;
          animation: typing 3s steps(30, end) infinite;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid #fff;
          width: 22ch;
        }

        @keyframes typing {
          0% { width: 0ch }
          50% { width: 22ch }
          100% { width: 0ch }
        }
      `}</style>
    </div>
  );
};

const styles = {
  card: {
    fontFamily: "'Inter', sans-serif",
    position: 'relative',
    maxWidth: 400,
    margin: "80px auto",
    padding: "30px 40px",
    background: 'transparent',
    minHeight: '550px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tiltContainer: {
    width: '100%',
    transition: 'transform 0.1s ease-out',
  },
  hidden: {
    opacity: 0,
    transform: 'scale(0.95) translateY(20px)',
  },
  visible: {
    opacity: 1,
    transform: 'scale(1) translateY(0px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
  },
  header: {
    textAlign: 'center',
    marginBottom: '10px',
  },
  logo: { height: '24px', opacity: 0.7, marginBottom: '5px' },
  username: { display: 'block', fontSize: '18px', fontWeight: 500, color: '#ddd' },

  orbContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '30px 0',
  },
  orb: {
    position: 'relative',
    width: '260px',
    height: '260px',
    borderRadius: '50%',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    background: 'rgba(13, 17, 23, 0.3)',
    backdropFilter: 'blur(5px)',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orbVisible: {
    boxShadow: 'inset 0 0 25px rgba(0, 255, 213, 0.2), 0 0 40px -10px var(--glow-color)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  orbContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: '#fff',
    mixBlendMode: 'difference',
  },
  totalValue: { fontSize: '56px', fontWeight: '700' },
  totalLabel: { fontSize: '14px', letterSpacing: '1.5px', opacity: 0.9 },

  statsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '30px',
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '16px',
    fontWeight: 500,
    color: '#ccc',
  },
  dot: { width: '10px', height: '10px', borderRadius: '50%' },
  statValue: {
    marginLeft: 'auto',
    fontSize: '18px',
    fontWeight: '700',
    color: '#fff',
  },
  rankContainer: {
    textAlign: 'center',
    marginTop: '25px',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    fontSize: '16px',
    fontWeight: 500,
    color: '#ccc',
  },
  rankValue: { color: '#FFD700', fontWeight: '700', marginLeft: '8px' },
  centered: { width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
  errorText: { color: '#ff8a80', fontWeight: 'bold', fontSize: '18px' },
  errorSubText: { color: '#aaa', marginTop: '5px' },
};

export default LeetCode;
