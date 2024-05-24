import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/education.css";

const education = () => {
	return (
		<div className="education">
			<Card
				icon={faBriefcase}
				title="Education"
				body={
					<div className="educations-body">
					<a href="https://narxoz.edu.kz/" target="_blank" rel="noopener noreferrer" className="education-link">
						<div className="education">
						<img
							src="https://narxoz.edu.kz/images/tild3264-3633-4839-b137-386564333632__1-3.svg"
							alt="Narxoz University"
							className="education-image"
						/>
							<div className="education-title">Narxoz University</div>
							<div className="education-subtitle">
								Digital Management and Design Faculty
							</div>
							<div className="education-duration">2024 - Present</div>
						</div>
					</a>
				</div>



				}
			/>
		</div>
	);
};

export default education;
