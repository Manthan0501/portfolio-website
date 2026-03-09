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
                <h4>DevOps Engineer</h4>
                <h5>Imperial Milestone Private Limited</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built CI/CD pipelines using Jenkins and ArgoCD, integrating Git
              webhooks to accelerate release cycles. Orchestrated application
              workloads on Kubernetes clusters to maintain availability and
              reliability. Tuned Jenkins agents and pipeline execution, reducing
              build time by 30%. Partnered with developers to improve release
              workflows, cutting deployment time by 40%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
