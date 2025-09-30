import React, { useEffect, useState } from "react";
import { FiClock, FiMapPin } from "react-icons/fi";
import "./announcements.css";

function Announcements() {
  const [anonslar, setAnonslar] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/anons")
      .then((res) => res.json())
      .then((data) => {
        const today = new Date();

        data.forEach((anons) => {
          const end = new Date(anons.endDate);
          if (today > end) {
            fetch(`http://localhost:3000/anons/${anons.id}`, {
              method: "DELETE",
            });
          }
        });

        const active = data.filter((a) => new Date(a.endDate) >= today);
        setAnonslar(active);
      })
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div className="anonslar">
      <h2>E'lonlar</h2>
      {anonslar.length > 0 ? (
        <div className="anons-grid">
          {anonslar.map((anons) => (
            <div key={anons.id} className="anons-card">
              <div className="anons-img-wrapper">
                <img src={anons.image} alt={anons.title} />
                <div className="anons-overlay">
                  <h3>{anons.title}</h3>
                </div>
              </div>
              <div className="anons-body">
                <p className="anons-desc">{anons.description}</p>

                <span className="anons-date">
                  {anons.endDate} gacha
                </span>

                {anons.time && (
                  <p className="anons-time">
                    <FiClock className="anons-icon" /> {anons.time}
                  </p>
                )}

                {anons.location && (
                  <a
                    className="anons-location"
                    href={anons.location}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiMapPin className="anons-icon" /> Manzilni ochish
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-msg">Hozircha aktiv anonslar yo‘q.</p>
      )}
    </div>
  );
}

export default Announcements;
