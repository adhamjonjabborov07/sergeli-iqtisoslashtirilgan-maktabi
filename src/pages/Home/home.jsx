import React, { useEffect, useState } from "react";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiBookOpen, FiUsers } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import { GoTrophy } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";

function Home() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);

  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [classCount, setClassCount] = useState(0);


  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,    
      offset: 100, 
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));

    fetch("http://localhost:3000/teachers")
      .then((res) => res.json())
      .then((data) => setTeachers(data));

    fetch("http://localhost:3000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  useEffect(() => {
    const duration = 6000;
    const steps = 200;
    const interval = duration / steps;

    let studentStep = students.length / steps;
    let teacherStep = teachers.length / steps;
    let classStep = classes.length / steps;

    let s = 0,
      t = 0,
      c = 0;
    const timer = setInterval(() => {
      s += studentStep;
      t += teacherStep;
      c += classStep;

      if (
        s >= students.length &&
        t >= teachers.length &&
        c >= classes.length
      ) {
        clearInterval(timer);
        setStudentCount(students.length);
        setTeacherCount(teachers.length);
        setClassCount(classes.length);
      } else {
        setStudentCount(Math.floor(s));
        setTeacherCount(Math.floor(t));
        setClassCount(Math.floor(c));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [students, teachers, classes]);

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

      <section className="info">
        <div className="info__container">
          <div data-aos="fade-up" className="info__image">
            <img
              src="/src/pages/Home/school.jpg"
              alt="Maktab ichki ko‘rinishi"
            />
          </div>

          <div data-aos="fade-up" className="info__content">
            <h2 className="info__title">Umumiy Ma'lumot</h2>

            <div className="info__row">
              <span className="info__line"></span>
              <p className="info__text">
                Sergeli tuman ixtisoslashtirilgan maktabi 2022-yilda faoliyatini
                boshlagan. Maktab aniq va tabiiy fanlarga ixtisoslashgan bo‘lib,
                ta’lim tili – o‘zbek. Shuningdek, ingliz tili (IELTS), koreys tili,
                IT va robototexnika yo‘nalishlari mavjud.
              </p>
            </div>

            <div className="info__row">
              <span className="info__line"></span>
              <p className="info__text">
                Ilk o‘quv yili maktab 17 ta sinfda jami 408 ta o‘quvchini qamrab
                olgan. 2023-yil sentabrda yangi bino foydalanishga topshirildi.
                Hozirda 540 o‘quvchi 24 ta sinfda tahsil olmoqda.
              </p>
            </div>

            <div className="info__row">
              <span className="info__line"></span>
              <p className="info__text">
                Bugungi kunda 53 nafar pedagog faoliyat yuritadi. Ulardan yarmi
                oliy toifali bo‘lib, 20 nafari xalqaro va milliy sertifikatlarga
                ega.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-div">
          <div className="section-div-card">
            <p className="section-div-card-icon">
              <LuGraduationCap size={30} />
            </p>
            <p className="section-div-card-p1">{studentCount}</p>
            <p className="section-div-card-p2">O'quvchilar</p>
          </div>
          <div className="section-div-card">
            <p className="section-div-card-icon">
              <FiUsers size={30} />
            </p>
            <p className="section-div-card-p1">{teacherCount}</p>
            <p className="section-div-card-p2">Ustozlar</p>
          </div>
          <div className="section-div-card">
            <p className="section-div-card-icon">
              <FiBookOpen size={30} />
            </p>
            <p className="section-div-card-p1">{classCount}</p>
            <p className="section-div-card-p2">Sinflar</p>
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
            <div data-aos="fade-up" data-aos-duration="1000" className="benefit-card">
              <p className="benefit-card-icon">
                <FiUsers size={30} />
              </p>
              <h3 className="benefit-name">Tajribali o'qituvchilar</h3>
              <p className="benefit-info">
                Ko'p yillik tajribaga ega professional pedagoglar
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="1300" className="benefit-card">
              <p className="benefit-card-icon">
                <FiBookOpen size={30} />
              </p>
              <h3 className="benefit-name">Zamonaviy dasturlar</h3>
              <p className="benefit-info">
                Dolzarb ta'lim dasturlari va metodikalari
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="1600" className="benefit-card">
              <p className="benefit-card-icon">
                <GoTrophy size={30} />
              </p>
              <h3 className="benefit-name">Yuqori natijalar</h3>
              <p className="benefit-info">
                O'quvchilarimizning a'lo darajadagi akademik yutuqlari
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="1900" className="benefit-card">
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
