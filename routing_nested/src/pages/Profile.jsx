import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p className="intro">
        Hi, I'm <span className="name">Rajan Kumar</span> — an <span className="branch">Electronics and Communication Engineering</span> student at <span className="college">NIT Jalandhar</span>, originally from <span className="highlight">Hoshiarpur, Punjab</span>. I enjoy transforming ideas into interactive digital experiences. This site showcases my learning, skills, and passion for building with code.
      </p>

      <h2>Connect With Me</h2>
      <div className="links">
        <a href="https://github.com/rajankumar2511" target="_blank" rel="noopener noreferrer" className="github">
          <img src="https://img.icons8.com/ios-filled/30/ffffff/github.png" alt="GitHub" />
          GitHub
        </a>
        <a href="https://linkedin.com/in/rajan-kumar-6b3562285" target="_blank" rel="noopener noreferrer" className="linkedin">
          <img src="https://img.icons8.com/ios-filled/30/ffffff/linkedin.png" alt="LinkedIn" />
          LinkedIn
        </a>
        <a href="mailto:rajankumar2003knc@gmail.com" className="email">
          <img src="https://img.icons8.com/ios-filled/30/ffffff/apple-mail.png" alt="Email" />
          Email
        </a>
      </div>

      <h2>Why I Built This Site</h2>
      <p className="motive">
        This project is part of my <span className="highlight">internship journey</span>. I built it to apply my skills in <span className="branch">web development</span>, showcase my <span className="highlight">personal growth</span>, and learn how to structure <span className="college">real-world projects</span>. It also serves as a fun, interactive way to express my <span className="name">style and motivation</span>.
      </p>

      <h2>Other Tasks</h2>
      <ul className="task-links">
        <li>
          <a href="https://rajankumar2511.github.io/SCT_WD_2/" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-stopwatch"></i> Stopwatch App
          </a>
        </li>
        <li>
          <a href="https://rajankumar2511.github.io/SCT_WD_3/" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-gamepad"></i> Tic-Tac-Toe Game
          </a>
        </li>
        <li>
          <a href="https://rajankumar2511.github.io/SCT_WD_4/" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-tasks"></i> To-Do App
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
