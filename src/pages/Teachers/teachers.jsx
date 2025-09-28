import React, { useEffect, useState } from "react";
import "./teachers.css";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await fetch("http://localhost:3000/teachers");
        const data = await res.json();
        setTeachers(data);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchTeachers();
  }, []);

  const filteredTeachers = teachers.filter((teacher) => {
    const fullName = `${teacher.firstName} ${teacher.lastName}`.toLowerCase();
    return (
      fullName.includes(searchTerm.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <div className="teachers-section">
        <p className="teachers-section-p1">Bizning ustozlar</p>
        <p className="teachers-section-p2">
          Bizning professional o'qituvchilar jamoamiz bilan tanishing
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
            placeholder="Fan yoki ism bo'yicha qidiring"
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
      </div>

      <section className="teachers-grid">
        {filteredTeachers.length > 0 ? (
          filteredTeachers.map((teacher) => (
            <div key={teacher.id} className="teacher-card">
              <img
                src={teacher.photo}
                alt={`${teacher.firstName} ${teacher.lastName}`}
              />
              <h3>
                {teacher.firstName} {teacher.lastName}
              </h3>
              <p className="subject">{teacher.subject}</p>
              <p>{teacher.email}</p>
              <p>{teacher.phone}</p>
              <button
                className="details-btn"
                onClick={() => setSelectedTeacher(teacher)}
              >
                Batafsil
              </button>
            </div>
          ))
        ) : (
          <p className="no-result">Hech narsa topilmadi 😔</p>
        )}
      </section>

      {selectedTeacher && (
        <div className="modal-overlay" onClick={() => setSelectedTeacher(null)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedTeacher(null)}
            >
              ✕
            </button>
            <img
              src={selectedTeacher.photo}
              alt={`${selectedTeacher.firstName} ${selectedTeacher.lastName}`}
            />
            <h2>
              {selectedTeacher.firstName} {selectedTeacher.lastName}
            </h2>
            <p className="subject">{selectedTeacher.subject}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Teachers;
