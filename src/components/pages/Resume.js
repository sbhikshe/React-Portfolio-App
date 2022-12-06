import React from "react";
import '../css/Resume.css';
import resumePdf from './docs/Resume.pdf';

export default function Resume() {
  const frontEndSkills = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'React', 'Handlebars', 'Bootstrap'];
  const backEndSkills = ['Express.js', 'Node.js', 'mySQL', 'Sequelize', 'MongoDB', 'Mongoose'];
  const otherSkills = ['Agile', 'MVC Architecture', 'Git', 'Test Driven Development'];

  return (
    <div className="resume">
      <div className="downloadResume">
        <a href={resumePdf} download="Resume">
          Download Resume
        </a>
      </div>
      <div>
        <h4>
          Front End Skills
        </h4>
        <ul>
          {frontEndSkills.map((skill) => (
            <li>
            {skill}
          </li>
          ))}
        </ul>
      </div>

      <div>
        <h4>
          Back End Skills
        </h4>
        <ul>
        {backEndSkills.map((skill) => (
            <li>
            {skill}
          </li>
          ))}
        </ul>
      </div>
      <div>
        <h4>
          Software Development Skills:
        </h4>
        <ul>
        {otherSkills.map((skill) => (
            <li>
            {skill}
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}