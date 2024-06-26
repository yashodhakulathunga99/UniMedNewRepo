import React from "react";
import headerBg from "../../../assets/logo.png";
import "./heder.css";
import tools from "../../../assets/tools/tools.png";

function Header() {
	return (
		<header className="header">
			<div className="content">
				<h1>
					<span>Get Quick</span>
					<br />
					Medical Services
				</h1>
				<p>
					UniMed System for revolutionize the way healthcare services are
					managed and delivered by providing quick and efficient medical
					services. By leveraging digital solutions, we intend to streamline
					various aspects of healthcare management, including appointment
					scheduling, medication tracking, and health record management.
					<br />
					<b>Join with us by creating a new account</b>
				</p>
				<a href="/signup">
					<button className="btnhp">Create Account</button>
				</a>
			</div>
			<div className="image">
				<span className="image__bg"></span>
				<img src={headerBg} alt="header" />
				<div className="image__content image__content__2">					
            <img className="toolIcon" src={tools} />          
				</div>
			</div>
		</header>
	);
}

export default Header;
