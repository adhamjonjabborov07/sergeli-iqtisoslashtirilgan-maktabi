import React from "react";
import "./home.css";
import { FiBookOpen, FiUsers } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";

function Home() {
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
              <LuGraduationCap />
            </p>
            <p className="section-div-card-p1">

            </p>
            <p className="section-div-card-p2">
              O'quvchilar
            </p>
          </div>
          <div className="section-div-card">
            <p className="section-div-card-icon">
              <LuGraduationCap />
            </p>
            <p className="section-div-card-p1">

            </p>
            <p className="section-div-card-p2">
              Ustozlar
            </p>
          </div>
          <div className="section-div-card">
            <p className="section-div-card-icon">
              <LuGraduationCap />
            </p>
            <p className="section-div-card-p1">

            </p>
            <p className="section-div-card-p2">
              Sinflar
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
