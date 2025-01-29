'use client'

export default function Navbar({ activePage, setActivePage }) {
  const navItems = [
    'about',
    'skills',
    'resume',
    'portfolio',
    'contact'
  ]

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item} className="navbar-item">
            <button 
              className={`navbar-link ${activePage === item ? 'active' : ''}`}
              onClick={() => setActivePage(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
} 