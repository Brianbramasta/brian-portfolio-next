'use client'
import { useState } from 'react'

export default function Contact({ isActive }) {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const isFormValid = () => {
    return formData.fullname && formData.email && formData.message
  }

  return (
    <article className={`contact ${isActive ? 'active' : ''}`} data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.418580061671!2d112.76534360990672!3d-7.306782292670585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb89f1c42717%3A0x6858ff81a69f99a3!2sMGE%20Morning%20Glory%20Enterprise!5e0!3m2!1sid!2sid!4v1720278114397!5m2!1sid!2sid" 
            width="400" 
            height="300" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form 
          className="form" 
          action="https://formspree.io/f/mknllwqe" 
          method="POST" 
          data-form
        >
          <div className="input-wrapper">
            <input 
              type="text" 
              name="fullname" 
              className="form-input" 
              placeholder="Full name" 
              required 
              value={formData.fullname}
              onChange={handleChange}
            />

            <input 
              type="email" 
              name="email" 
              className="form-input" 
              placeholder="Email address" 
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <textarea 
            name="message" 
            className="form-input" 
            placeholder="Your Message" 
            required
            value={formData.message}
            onChange={handleChange}
          />

          <button 
            className="form-btn" 
            type="submit" 
            disabled={!isFormValid()}
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  )
} 