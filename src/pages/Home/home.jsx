import React from "react";
import "./home.css";
import { FiBookOpen, FiUsers } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Home() {
  return (
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
          <img src="/src/pages/Home/banner3.jpg" alt="Banner 3" />
        </SwiperSlide>
      </Swiper>


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
  );
}

export default Home;
