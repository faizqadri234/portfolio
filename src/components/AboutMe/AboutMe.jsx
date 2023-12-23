import "./AboutMe.css";
import { useGetAboutMeQuery, useGetHomeDetailsQuery } from "../../Api/api";
import { useEffect, useState } from "react";
import decor1 from "../../images/decoration/dots-1.png";
import reactagle from "../../images/decoration/Rectangle-7.png";
import shady from "../../images/decoration/dots.png";

const AboutData = [
  {
    id: '2934fnajkshd',
    title: 'ABOUT ME',
    title_2: 'Why hire me for your next project?',
    description_one: "As a skilled and experienced React Native developer, I bring a strong proficiency in creating cross-platform mobile applications that deliver exceptional user experiences. My expertise lies in architecting robust and scalable React Native applications, utilizing best practices and industry standards. I am proficient in leveraging the React Native framework to build intuitive user interfaces. In addition to my technical skills, I possess excellent problem-solving abilities and a passion for staying up-to-date with the latest trends and advancements in mobile app development"
  }
]
//https://drive.google.com/file/d/11ck8ZUOPYFAgOaKKaHs-fOL3gxCT8bEy/view?usp=sharing
const AboutMe = () => {
  const img_300 = "https://drive.google.com/uc?id=";

  return (
    <>
      {AboutData &&
        AboutData.map((details) => (
          <main id="about" key={details.id}>
            <div className="aboutMe-container">
              <div className="about-decor">
                <div className="about-dots">
                  <img src={decor1} alt="" />
                </div>
                <div className="about-rect">
                  <img src={reactagle} alt="" />
                </div>
                <div className="about-shady">
                  <img src={shady} alt="" />
                </div>
              </div>
              <div className="abouMe-row">
                <div
                  className=" col-lg-6 col-md-5 col-sm-12 about-img"
                  data-aos="fade-up-right"
                >
                  <img src={`https://drive.google.com/uc?id=1B97-7cbBT2HhLUqHh5bvfckaGLsudQmj`} alt="" />
                </div>
                <div
                  className=" col-lg-6 col-md-7  col-sm-12 about_myinfo"
                  data-aos="fade-up-left"
                >
                  <div className="title">
                    <h2>{details.title}</h2>
                    <h3>{details.title_2}</h3>
                  </div>
                  <div className="about-description">
                    <div id="foo" unselectable="on" class="unselectable">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${details.description_one}`,
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="itscv">
                    <a
                      href={`${img_300}11ck8ZUOPYFAgOaKKaHs-fOL3gxCT8bEy`}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="download-cv">
                        Check My Cv <i class="bx bx-download"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        ))}
    </>
  );
};

export default AboutMe;
