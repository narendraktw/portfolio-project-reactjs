import React from "react";
import author from "../assets/images/myPic.png";
const AboutMe = () => {
	return (
		<div id="about" className="aboutMe ptb">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-xm-12">
						<div className="photo-wrap mb-5">
							<img className="profile-img" src={author} alt="author..." />
						</div>
					</div>
					<div className="col-lg-6 col-xm-12">
						<h1 className="about-heading">about me</h1>
						<p>
							Hello! I am Narendra Bisht. Result-driven Full Stack Software
							Developer with 10+ years of extensive experience in developing web
							applications and cross-platform mobile apps using cutting-edge
							open-source libraries and frameworks. Proficient in spearheading
							full software development life cycle – from idea through the
							delivery of next-generation applications and customized solutions.
							Versatile experience in start-up products to Enterprise
							applications, Existing bussiness process improvement, and
							Automation. Proven ability to lead technical teams to produce
							high-quality deliverables that meet or exceed timeline and
							budgetary targets. A strategic thinker with superior verbal &
							written communications skills.
							<br />
							<b>Technologies/Skills:</b> ReactJs, Redux, JavaScript,
							NodeJs(Rest APIs), ASP.net, ES6+, HTML5, Material UI, Sass, CSS3,
							Bootstrap, AWS Cloud, Sharepoint Online, Nintex Workflow, Tableau,
							SQL Server & MongoDB.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
