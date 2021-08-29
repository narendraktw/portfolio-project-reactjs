import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="container ptb">
      <div className="d-flex justify-content-center">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-Present</h3>
            <p>
              <h4>Associate Architect</h4>
              <h5>Puresoftware Pvt. Ltd</h5>
              Developed MHK Care Prominence Configuration Management and Letter
              Automation tool for MHK client.
              <br />
              <b>Technology:</b> ReactJs, Redux, ES6, HTML5, Material UI, Sass,
              MySQL Database, AWS S3 bucket.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-2020</h3>
            <p>
              <h4>Lead Learning Developer</h4>
              <h5>Honeywell International Pvt. Ltd</h5>
              Delegating work and assignments to team members. Collaborating
              with their team to identify and fix technical problems. Developed
              Learning Plan website for Sales, Customer Marketing & Offering
              Management teams.
              <br />
              <b>Technology:</b> Asp.net, ReactJs, Redux, JEST, Enzyme, ES6,
              HTML5, Bootstrap, AWS SQL Database, Tableau 10.3, Wordsmith.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017-2019</h3>
            <p>
              <h4>Senior Web Programmer</h4>
              <h5>Honeywell International Pvt. Ltd</h5>
              Developed Quota deveployment tool and Learning portal for
              Honeywell Process Solution business and Corporate team.
              <br />
              <b>Technology:</b>: ReactJs, Asp.net, ES6, HTML5, Bootstrap, SQL
              Server.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2014-2017</h3>
            <p>
              <h4>Web Developer Specialist</h4>
              <h5>Honeywell International Pvt. Ltd</h5>
              Developed and migrated Price Deviation, Indirect Spends and
              Digital Workspace tool for Honeywell Safety Products & Honeywell
              internal team.
              <br />
              <b>Technology:</b> SharePoint 2013/Online, Nintex Workflow,
              Agilepoint workflow, SP Services, JavaScript, jQuery, HTML5, CSS3,
              Bootstrap.
            </p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2011-2014</h3>
            <p>
              <h4>Web Developer Associates</h4>
              <h5>Honeywell International Pvt. Ltd</h5>
              Developed Project Management, Mywebtech and Product Creation
              Request tool for Honeywell Home Security & Honeywell Safety
              Products
              <br />
              <b>Technology:</b> SharePoint 2010/2013/Online, Nintex Workflow,
              SP Services, Microsoft Flows, JavaScript, jQuery, HTML5, CSS3.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2010-2011</h3>
            <p>
              <h4>WebMaster</h4>
              <h5>Manpower Pvt. Ltd</h5>
              Design and Maintain websites HoneywellCity and HSMCity for
              Honeywell different partners. <br />
              <b>Technology:</b> Asp.net, JavaScript, jQuery, HTML5, CSS3.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
