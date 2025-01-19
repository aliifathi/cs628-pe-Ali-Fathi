import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Ali Fathi</h1>
        <p>Seattle USA, 98087 | (425) 219-7446 | aliifathi@yahoo.com</p>
      </header>

      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Science in Computer Science</h3>
          <p>City University of Seattle, Seattle USA | May 2025</p>
          <p>GPA: 3.9/4.0</p>
          <h3>Bachelor of Engineering in Architecture</h3>
          <p>Azad University of Shiraz, Shiraz Iran | May 2018</p>
          <p>GPA: 3.7/4.0</p>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul className="skills">
          <li>Programming Languages: Python, JavaScript, Java</li>
          <li>Frameworks and Tools: React, Node.js, Django, FastAPI</li>
          <li>Cloud Platforms: AWS (EC2, S3), Azure</li>
          <li>Database Management: MySQL, MongoDB</li>
          <li>DevOps: Docker, Jenkins, CI/CD Pipelines</li>
        </ul>
      </section>

      <section className="section">
        <h2>Work Experience</h2>
        <div className="experience">
          <h3>Software Engineer Intern</h3>
          <p>XYZ Tech Solutions, Seattle USA | June 2024 – Present</p>
          <ul>
            <li>Developed a scalable sentiment analysis model using Python and FastAPI, deployed on AWS EC2.</li>
            <li>Implemented CI/CD pipelines to automate application deployment, reducing deployment time by 40%.</li>
            <li>Collaborated with cross-functional teams to design REST APIs for data analysis tools.</li>
          </ul>

          <h3>Junior Architect</h3>
          <p>ABC Design Firm, Shiraz Iran | July 2018 – December 2022</p>
          <ul>
            <li>Managed architectural projects, overseeing design, planning, and execution stages.</li>
            <li>Utilized AutoCAD and Revit to create 3D models and designs for large-scale projects.</li>
            <li>Collaborated with stakeholders to ensure project requirements were met on time and within budget.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;

