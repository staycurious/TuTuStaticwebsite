import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {
  return (
    <section className="hero">
      <div className="container">
        <img 
          src="/game-icon.png" 
          alt="Number Cross Game Icon" 
          className="game-icon"
        />
        <h1>Number Cross</h1>
        <p>Challenge your intelligence and enjoy the puzzle fun！</p>
        
        <div className="download-buttons">
          <div className="download-group">
            <a 
              href="https://apps.apple.com/app/id6738794848" 
              className="store-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="/app-store-icon.png" 
                alt="Download on App Store" 
                className="store-icon"
              />
            </a>
            <a href="/games-privacy-policy.html" className="legal-link">Privacy Policy</a>
          </div>
          <div className="download-group">
            <a 
              href="https://play.google.com/store/apps/details?id=com.tutufungames.number.cross.puzzle" 
              className="store-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="/google-play-icon.png" 
                alt="Get it on Google Play" 
                className="store-icon"
              />
            </a>
            <a href="/games-terms-of-service.html" className="legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
