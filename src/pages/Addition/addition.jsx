import React, { useEffect, useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "/src/pages/Addition/addition.css";

function Addition() {
  const [additions, setAdditions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchAdditions = async () => {
      try {
        const res = await fetch("http://localhost:3000/addition");
        const data = await res.json();
        setAdditions(data);
      } catch (err) {
        console.error("Xato:", err);
      }
    };

    fetchAdditions();
  }, []);

  const filteredAdditions = additions.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="addition-section">
      <p className="addition-section-p1">E’lonlar</p>
      <p className="addition-section-p2">
        Maktabimizdagi yangi e’lonlar va muhim xabarlar
      </p>

      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="input"
          placeholder="E’lonlarni qidirish..."
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <div className="addition-list">
        {filteredAdditions.map((item) => (
          <div key={item.title} className="addition-card">
            <img src={item.image} alt={item.title} />
            <div className="addition-card-header">
              <h3>{item.name}</h3>
            </div>
            <p>{item.description}</p>
            <div className="addition-card-footer">
              <div className="addition-date">
                <IoTimeOutline className="time-icon" />
                <span className="date-text">{item.date}</span>
              </div>

              <Link
                to="/addition/details"
                state={{ addition: item }}
                className="detail-link"
              >
                Batafsil
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Addition;
