import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Trainee Software Engineer Intern</h4>
                <h5>Lcode Technologies</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed fraud detection pipelines, engineered behavioral risk features, and deployed real-time FastAPI-based ML inference systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Intern</h4>
                <h5>NITK Surathkal</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked on neural cryptanalysis research under ISEA Phase-III using DES encryption pipelines and BiLSTM models.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. in Computer Science (AI & ML)</h4>
                <h5>The National Institute of Engineering</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing Bachelor of Engineering with CGPA of 9.46/10, specializing in Artificial Intelligence and Machine Learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
