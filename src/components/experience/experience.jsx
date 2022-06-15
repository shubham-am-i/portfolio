import "./experience.css";
import { FaReact, FaHtml5, FaSass, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {
  SiRedux,
  SiCss3,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from "react-icons/si";

export default function experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>Experience with Technologies</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">
            <article className="experience__details">
              <FaReact id="icon" />
              <div>
                <h4>React</h4>
                <small>70%</small>
              </div>
            </article>

            <article className="experience__details">
              <DiJavascript1 id="icon" />
              <div>
                <h4>Javascript</h4>
                <small>80%</small>
              </div>
            </article>

            <article className="experience__details">
              <SiRedux id="icon" />
              <div>
                <h4>Redux</h4>
                <small>50%</small>
              </div>
            </article>

            <article className="experience__details">
              <SiCss3 id="icon" />
              <div>
                <h4>CSS</h4>
                <small>70%</small>
              </div>
            </article>

            <article className="experience__details">
              <FaHtml5 id="icon" />
              <div>
                <h4>HTML</h4>
                <small>90%</small>
              </div>
            </article>

            <article className="experience__details">
              <FaSass id="icon" />
              <div>
                <h4>Sass</h4>
                <small>40%</small>
              </div>
            </article>
          </div>
        </div>

        {/* Backend skills */}
        <div className="experience__backend">
          <h3>Backend Development</h3>

          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs id="icon" />
              <div>
                <h4>Node</h4>
                <small>80%</small>
              </div>
            </article>

            <article className="experience__details">
              <SiExpress id="icon" />
              <div>
                <h4>Express</h4>
                <small>70%</small>
              </div>
            </article>

            <article className="experience__details">
              <SiMongodb id="icon" />
              <div>
                <h4>MongoDB</h4>
                <small>80%</small>
              </div>
            </article>

            <article className="experience__details">
              <SiFirebase id="icon" />
              <div>
                <h4>Firebase</h4>
                <small>85%</small>
              </div>
            </article>

            <article className="experience__details">
              <FaGitAlt id="icon" />
              <div>
                <h4>Git</h4>
                <small>70%</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
