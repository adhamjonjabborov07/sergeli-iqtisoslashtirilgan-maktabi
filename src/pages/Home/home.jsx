import React from 'react'
import './home.css'
import { FiBookOpen, FiUsers } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";

function home() {
  return (
    <div className="welcome-container">
      <div className="welcome-overlay">
        <div className="welcome-content">
          <h1 className="welcome-title">Bizning maktabimizga xush kelibsiz</h1>
          <p className="welcome-subtitle">Kelajak uchun ta'lim</p>

          <div className="features-section">
            <button className="feature-card-primary-card">
              <FiBookOpen size={20} />
              <span>Oxirgi yangiliklar</span>
            </button>

            <button className="feature-card-blur-card">
              <FiUsers size={20} />
              <span>Bizning ustozlar</span>
            </button>
          </div>
        </div>
      </div>  
    </div>
    
  )
}

export default home