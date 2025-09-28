import React, { useEffect, useState } from "react";
import { IoCalendarNumber } from "react-icons/io5";
import "./news.css";

function News() {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("http://localhost:3000/news");
        const data = await res.json();
        setNews(data);
      } catch (err) {
        console.error("Xato:", err);
      }
    };

    fetchNews();
  }, []);

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="news-section">
        <p className="news-section-p1">Maktab yangiliklari</p>
        <p className="news-section-p2">
          Maktabimiz hayotidagi so‘nggi voqealar va muhim yangiliklar
        </p>

        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <button type="button">
            <svg
              width={17}
              height={16}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
            >
              <path
                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                stroke="currentColor"
                strokeWidth="1.333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <input
            className="input"
            placeholder="Yangiliklarni qidirish..."
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="reset"
            type="button"
            onClick={() => setSearchTerm("")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </form>

        <div className="news-list">
          {filteredNews.map((item) => (
            <div key={item.id} className="news-card">
              <img src={item.image} alt={item.title} />

              <div className="news-card-header">
                <h3>{item.title}</h3>
              </div>

              <p>{item.description}</p>

              <div className="news-card-footer">
                <div className="news-date">
                  <IoCalendarNumber className="calendar-icon" />
                  <span className="date-text">{item.date}</span>
                </div>

                <button
                  className="detail-link"
                  onClick={() => setSelectedNews(item)}
                  aria-label={`Batafsil: ${item.title}`}
                >
                  Batafsil
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal strukturasi shu faylda */}
        {selectedNews && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedNews(null)}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedNews(null)}
              >
                ✕
              </button>

              <img src={selectedNews.image} alt={selectedNews.title} />

              <h2>{selectedNews.title}</h2>
              <p>{selectedNews.description}</p>

              <div className="modal-footer">
                <IoCalendarNumber className="calendar-icon" />
                <span>{selectedNews.date}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default News;
