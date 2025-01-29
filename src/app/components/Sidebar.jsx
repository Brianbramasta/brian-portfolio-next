'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false)

  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image 
            src="/assets/images/new_asset/brian profil 2 squere.png"
            alt="Brian Bramasta"
            width={150}
            height={150}
            style={{ 
              width: '150px',
              height: '150px',
              objectFit: 'cover',
            }}
            priority
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Brian Aldy Bramasta">Brian Bramasta</h1>
          <p className="title">Frontend Developer</p>
        </div>

        <button 
          className="info_more-btn" 
          onClick={() => setIsActive(!isActive)}
        >
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:Brianaldybramsata@gmail.com" className="contact-link">
                Brianaldybramsata@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+62895397115216" className="contact-link">
                +62-895397115216
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2000-01-27">January 27, 2000</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Surabaya, East Java, INA</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a 
              href="https://www.linkedin.com/in/brian-aldy-bramasta-718755186/" 
              target='_blank' 
              className="float d-flex align-items-center justify-content-center"
              rel="noopener noreferrer"
            >
              <Image 
                src="/assets/images/new_asset/LinkedIn 2.png" 
                alt="LinkedIn"
                width={18}
                height={18}
              />
            </a>
          </li>

          <li className="social-item">
            <a 
              href="https://www.instagram.com/br4masta/" 
              target='_blank' 
              className="social-link"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
} 