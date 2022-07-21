import React from "react";
import "./about.css";
import ME from "../../assets/profile.jpg";
import { FaAward, FaFolderOpen } from "react-icons/fa";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>7+ months</small>
            </article>

            {/* <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Not yet. You have the chance to be the first</small>
            </article> */}

            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>5 &nbsp; Completed Projects</small>
            </article>
          </div>
          <p>
          A MERN Developer. I can create websites and add features to existing ones. Impatient to learn new technologies which bring efficiency and productivity to my workflow. I spend most of the day working on <strong>web projects</strong> as well as studying sanskrit literature and philosophy.
          </p>
        </div>
      </div>
    </section>
  );
}
