'use client'
import { education } from '../data/education'
import { experience } from '../data/experience'

export default function Resume({ isActive }) {
  return (
    <article className={`resume ${isActive ? 'active' : ''}`} data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <a  
        href="https://drive.google.com/file/d/1Z9O2vK1BOwidKIk5ZQr2_dScouFU90eh/view?usp=sharing"
        target='_blank'  
        className="form-btn resume-btn"
      >
        <span>Resume</span>
      </a>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list education">
          {education.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.name}</h4>
              <span>{item.tahun}</span>
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list experience">
          {experience.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.name}</h4>
              <span>{item.tahun}</span>
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
            </li>
          ))}
        </ol>
      </section>
    </article>
  )
} 