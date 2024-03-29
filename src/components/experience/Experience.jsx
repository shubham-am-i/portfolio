import React from 'react'
import './experience.css'
import {
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
} from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import {
  SiRedux,
  SiCss3,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from 'react-icons/si'
// Progress componenet
import Progress from '../progress/Progress'

export default function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>Experience with Technologies</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>

          <div className='experience__content'>
            <article className='experience__details'>
              <FaReact id='icon' />
              <div>
                <h4>React</h4>
                <Progress done='80' color='blue' />
              </div>
            </article>

            <article className='experience__details'>
              <DiJavascript1 id='icon' />
              <div>
                <h4>Javascript</h4>
                <Progress done='90' color='darkBlue' />
              </div>
            </article>

            <article className='experience__details'>
              <SiRedux id='icon' />
              <div>
                <h4>Redux</h4>
                <Progress done='65' color='lightBlue' />
              </div>
            </article>

            <article className='experience__details'>
              <FaBootstrap id='icon' />
              <div>
                <h4>Bootstrap</h4>
                <Progress done='90' color='lightBlue' />
              </div>
            </article>

            <article className='experience__details'>
              <SiCss3 id='icon' />
              <div>
                <h4>CSS</h4>
                <Progress done='80' color='singerBlue' />
              </div>
            </article>

            <article className='experience__details'>
              <FaHtml5 id='icon' />
              <div>
                <h4>HTML</h4>
                <Progress done='90' color='darkBlue' />
              </div>
            </article>
          </div>
        </div>

        {/* Backend skills */}
        <div className='experience__backend'>
          <h3>Backend Development</h3>

          <div className='experience__content'>
            <article className='experience__details'>
              <FaNodeJs id='icon' />
              <div>
                <h4>Node</h4>
                <Progress done='80' color='lightBlue' />
              </div>
            </article>

            <article className='experience__details'>
              <SiExpress id='icon' />
              <div>
                <h4>Express</h4>
                <Progress done='80' color='singerBlue' />
              </div>
            </article>

            <article className='experience__details'>
              <SiMongodb id='icon' />
              <div>
                <h4>MongoDB</h4>
                <Progress done='70' color='blue' />
              </div>
            </article>

            <article className='experience__details'>
              <SiFirebase id='icon' />
              <div>
                <h4>Firebase</h4>
                <Progress done='85' color='lightBlue' />
              </div>
            </article>

            <article className='experience__details'>
              <FaGitAlt id='icon' />
              <div>
                <h4>Git</h4>
                <Progress done='70' color='singerBlue' />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
