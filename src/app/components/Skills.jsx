'use client'
import { skills } from '../data/skills'
import Image from 'next/image'

export default function Skills({ isActive }) {
  return (
    <article className={`skills ${isActive ? 'active' : ''}`} data-page="skills">
      <header>
        <h2 className="h2 article-title">My Skills</h2>
      </header>

      <section className="skills-text">
        <div className="wrap-image parent-skills">
          {skills.map((skill, index) => (
            <div key={index} className="image-wraper">
              <Image 
                src={skill.image}
                alt={skill.name}
                width={40}
                height={40}
                style={{ height: 'auto' }}
              />
              <span className="text-image">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
} 