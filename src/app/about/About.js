import "./About.css";

function About() {
  return (
    <div className="about-container">
      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>Smart Farming for a Water-Scarce Future</h1>
        <p>
          Intelligent Water Optimization System powered by IoT and AI to
          revolutionize precision irrigation.
        </p>
      </section>

      {/* VISION SECTION */}
      <section className="about-section">
        <h2>🌍 Our Vision</h2>
        <p>
          With rising water scarcity and unpredictable climate conditions,
          traditional irrigation methods are no longer sustainable. Our vision
          is to ensure every drop of water is used intelligently to maximize
          crop yield while conserving natural resources.
        </p>
      </section>

      {/* PROBLEM vs SOLUTION */}
      <section className="about-section split">
        <div>
          <h2>🚨 The Problem</h2>
          <ul>
            <li>Excessive water wastage</li>
            <li>Unpredictable weather conditions</li>
            <li>Manual irrigation inefficiencies</li>
            <li>Declining soil health</li>
          </ul>
        </div>

        <div>
          <h2>💡 Our Solution</h2>
          <ul>
            <li>Real-time IoT soil monitoring</li>
            <li>Weather forecast API integration</li>
            <li>AI-based irrigation scheduling</li>
            <li>Automated smart pump control</li>
          </ul>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="about-impact">
        <div className="impact-card">
          <h3>💧 40%</h3>
          <p>Water Usage Reduction</p>
        </div>
        <div className="impact-card">
          <h3>🌾 25%</h3>
          <p>Crop Yield Improvement</p>
        </div>
        <div className="impact-card">
          <h3>📡 24/7</h3>
          <p>Real-Time Monitoring</p>
        </div>
        <div className="impact-card">
          <h3>🤖 AI</h3>
          <p>Smart Irrigation Scheduling</p>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="about-section">
        <h2>⚙ Technology Stack</h2>
        <div className="tech-grid">
          <div>React.js Frontend</div>
          <div>Node.js Backend</div>
          <div>IoT Soil Moisture Sensors</div>
          <div>Weather Forecast API</div>
          <div>AI Scheduling Algorithm</div>
          <div>Cloud Data Analytics</div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="about-section">
        <h2>🌱 Why It Matters</h2>
        <p>
          Agriculture consumes a major portion of freshwater resources globally.
          By integrating intelligent automation and predictive analytics, our
          system ensures sustainable farming while improving farmer
          profitability.
        </p>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Join the Smart Irrigation Revolution</h2>
        <p>
          Building the future of agriculture through innovation and
          sustainability.
        </p>
      </section>
    </div>
  );
}

export default About;
