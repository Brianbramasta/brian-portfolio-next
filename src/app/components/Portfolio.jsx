'use client'
import { useState } from 'react'
import { portfolio } from '../data/portfolio'
import Image from 'next/image'

export default function Portfolio({ isActive }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'UI/UX', 'Web development']

  const filteredProjects = portfolio.filter(project => 
    activeFilter === 'All' ? true : project.category === activeFilter.toLowerCase()
  )

  return (
    <article className={`portfolio ${isActive ? 'active' : ''}`} data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {filters.map(filter => (
            <li key={filter} className="filter-item">
              <button 
                className={activeFilter === filter ? 'active' : ''}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button className="filter-select">
            <div className="select-value">Select category</div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li 
              key={index} 
              className="project-item active" 
              data-filter-item 
              data-category={project.category}
            >
              <a href={project.href} target="_blank">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <Image 
                    src={project.sourceGambar}
                    alt={project.judul}
                    width={300}
                    height={200}
                    style={{ objectFit: 'contain' }}
                  />
                </figure>
                <h3 className="project-title">{project.judul}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
} 