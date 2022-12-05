import React from "react";
import '../css/Resume.css';

export default function Resume() {
  return (
    <div className="resume">
      <div>
        <h3>
          Experience:
        </h3>
        <ul>
          <li>
            Mobile Software Engineer (Security) Dec 2006 - March 2010,
            Motorola Solutions, Sunnyvale, CA
          </li>
          <li>
            Mobile Software Engineer, Browser, May 2005 - May 2006,
            Nokia, Inc, Boston, MA
          </li>
          <li>
            User Interface and Embedded Software Development, Nov 2000 - May 2005,
            Vertu (Nokia), United Kingdom
          </li>
          <li>
            Software Engineer, Mobile Switching Center (GSM), Sep 1998 - Nov 2000,
            Nokia, Irving, TX
          </li>
          <li>
            Software Engineer, Network Management Software, July 1995 - July 1996,
            Siemens Communication Software, Bangalore, India.
          </li>
        </ul>
      </div>

      <div>
        <h3>
          Education:
        </h3>
        <ul>
        <li>
            Full Stack Web Development, 2022, UC Berkeley, CA
          </li>
          <li>
            MS, Computer Science, 1998 Clemson University, SC
          </li>
          <li>
            BE (Bachelors in Engineering), Computer Science, 1995 Birla Institute of Technology & Science, Pilani, India
          </li>
        </ul>
      </div>
      <div>
        <h3>
          Other:
        </h3>
        <ul>
          <li>
            Developed a WIX based website for a local music school. The site includes access upon login to a Google Sites portal 
            for students to organize and access their class records, and for the instructor to provide lessons, as well as a music library.
          </li>
        </ul>
      </div>
    </div>
  );
}