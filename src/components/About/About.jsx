import React, { useState } from "react";
import { about } from "../../info";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Modal from "../Modal/Modal";
import "./About.css";

function About() {
  const { name, role, description, resume, social } = about;
  const [isModalOpen, setModalOpen] = useState(false);

  const handleResumeClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="about center">
      {name && (
        <h1>
          Hi, I am <span className="about__name">{name}</span>
        </h1>
      )}

      {role && <h2 className="about__role">{role}</h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        {resume && (
          <button
            type="button"
            className="btn btn--outline"
            onClick={handleResumeClick}
          >
            Resume
          </button>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <iframe
          src={resume}
          title="Resume"
          style={{ width: '100%', height: '500px', border: 'none' }}
        />
      </Modal>
    </div>
  );
}

export default About;
