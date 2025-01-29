'use client'
import { services } from '../data/services'
import Image from 'next/image'

export default function About({ isActive }) {
  return (
    <article className={`about ${isActive ? 'active' : ''}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I am a Front End Developer with 2 years of experience specializing in building fast, responsive, 
          and efficient web applications. With expertise in JavaScript, PHP, React.js, Laravel, and Quasar (Vue.js), 
          I focus on delivering high-performance solutions that enhance user satisfaction. I thrive on optimizing 
          application speed and ensuring scalability, always staying ahead of the latest web technologies.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-icon-box">
                <Image 
                  src={service.img}
                  alt={service.title}
                  width={40}
                  height={40}
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="modal-container" data-modal-container>
        <div className="overlay" data-overlay></div>
        <section className="testimonials-modal">
          <button className="modal-close-btn" data-modal-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <Image 
                src="/assets/images/avatar-1.png"
                alt="Daniel lewis"
                width={80}
                height={80}
                data-modal-img
              />
            </figure>
            <Image 
              src="/assets/images/icon-quote.svg"
              alt="quote icon"
              width={25}
              height={25}
            />
          </div>

          <div className="modal-content">
            <h4 className="h3 modal-title" data-modal-title>Daniel lewis</h4>
            <time dateTime="2021-06-14">14 June, 2021</time>
            <div data-modal-text>
              <p>
                Richard was hired to create a corporate identity. We were very pleased with the work done. 
                She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, 
                ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
} 