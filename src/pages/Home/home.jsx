import React from "react";
import "./home.css";
import { FiBookOpen, FiUsers } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import { GiTrophyCup } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import { useEffect, useState } from "react";

function Home() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);

  // API dan ma’lumotlarni olish
  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Students error:", err));

    fetch("http://localhost:3000/teachers")
      .then((res) => res.json())
      .then((data) => setTeachers(data))
      .catch((err) => console.error("Teachers error:", err));

    fetch("http://localhost:3000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data))
      .catch((err) => console.error("Classes error:", err));
  }, []);
  return (
    <>
      <div className="welcome-container">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          allowTouchMove={false}
          className="welcome-swiper"
        >
          <SwiperSlide>
            <img src="/src/pages/Home/banner.jpg" alt="Banner 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/pages/Home/banner2.png" alt="Banner 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/pages/Home/banner3.png" alt="Banner 3" />
          </SwiperSlide>
        </Swiper>

        <div className="welcome-overlay">
          <div className="welcome-content">
            <h1 className="welcome-title">Bizning maktabimizga xush kelibsiz</h1>
            <p className="welcome-subtitle">Kelajak uchun ta'lim</p>

            <div className="features-section">
              <Link to={"/news"}>
                <button className="feature-card-primary-card">
                  <FiBookOpen size={20} />
                  <span>Oxirgi yangiliklar</span>
                </button>
              </Link>
              <Link to={"/teachers"}>
                <button className="feature-card-blur-card">
                  <FiUsers size={20} />
                  <span>Bizning ustozlar</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="section-div">
          <div className="section-div-card">
            <p className="section-div-card-icon">
              <LuGraduationCap size={30} />
            </p>
            <p className="section-div-card-p1">
              {students.length}
            </p>
            <p className="section-div-card-p2">
              O'quvchilar
            </p>
          </div>
          <div className="section-div-card">
            <p className="section-div-card-icon">
              <FiUsers size={30} />
            </p>
            <p className="section-div-card-p1">
              {teachers.length}
            </p>
            <p className="section-div-card-p2">
              Ustozlar
            </p>
          </div>
          <div className="section-div-card">
            <p className="section-div-card-icon">
              <FiBookOpen size={30} />
            </p>
            <p className="section-div-card-p1">
              {classes.length}
            </p>
            <p className="section-div-card-p2">
              Sinflar
            </p>
          </div>
        </div>
      </section>
      <section className="advantages-block">
        <div className="advantages-wrapper">
          <div className="advantages-heading">
            <h2 className="advantages-main-title">Nega bizni tanlashadi?</h2>
            <p className="advantages-intro-text">
              Biz zamonaviy metodika va texnologiyalardan foydalangan holda sifatli ta'lim taqdim etamiz
            </p>
          </div>

          <div className="benefits-container">
            <div className="benefit-card">
              <p className="benefit-card-icon">
                <FiUsers size={30} />
              </p>
              <h3 className="benefit-name">Tajribali o'qituvchilar</h3>
              <p className="benefit-info">
                Ko'p yillik tajribaga ega professional pedagoglar
              </p>
            </div>

            <div className="benefit-card">
              <p className="benefit-card-icon">
                <FiBookOpen size={30} />
              </p>
              <h3 className="benefit-name">Zamonaviy dasturlar</h3>
              <p className="benefit-info">
                Dolzarb ta'lim dasturlari va metodikalari
              </p>
            </div>

            <div className="benefit-card">
              <p className="benefit-card-icon">
                <GiTrophyCup size={30} />
              </p>
              <h3 className="benefit-name">Yuqori natijalar</h3>
              <p className="benefit-info">
                O'quvchilarimizning a'lo darajadagi akademik yutuqlari
              </p>
            </div>

            <div className="benefit-card">
              <p className="benefit-card-icon">
                <FaRegHeart size={30} />
              </p>
              <h3 className="benefit-name">Individual yondashuv</h3>
              <p className="benefit-info">
                Har bir o'quvchiga alohida e'tibor va g'amxo'rlik
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
