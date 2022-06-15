import React from "react";
import "./about.css";
import ME from "../../assets/profile.jpg";
import { FaAward, FaUsers, FaFolderOpen } from "react-icons/fa";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6+ months learning/projects</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Not yet. You have the change to be the first</small>
            </article>

            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p>
          A MERN Developer. I like creating and adding features to existing web applications. I challenge myself by learning new tools and technologies which bring efficiencies and increased productivity to my workflow. A part of my day involves working on web projects as well as studying sanskrit literature and philosophy.
          </p>
        </div>
      </div>
    </section>
  );
}
