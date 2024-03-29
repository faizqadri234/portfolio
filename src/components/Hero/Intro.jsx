import { useEffect } from "react";
import decor3 from "../../images/decoration/Group-31.png";
import "./Intro.css";
import thumbnail from '../../images/intro.png'

const IntroData = [
  {
    id: '123114234235',
    job_title: 'Software Engineer',
    name: 'Muhammad Faiz',
    par_inro: 'I really enjoy coding and am passionate about programming. Professionally, I work as a React Native and React JS developer',
    hireMe_link: 'faizqadri234@gmail.com'
  }
]
const SocialData = [
  {
    id: '1sljd1,mns',
    link: 'https://github.com/faizqadri234',
    social_icon: 'fa fa-github'
  },
  {
    id: '1sljd1123,mns',
    link: "https://api.whatsapp.com/send?phone=+923244381861&text=Hello%20there,%20I%20hope%20you're%20doing%20well!",
    social_icon: 'bx bxl-whatsapp'
  },
  {
    id: '1sljd1,ssffmns',
    link: 'https://www.linkedin.com/in/muhammad-faiz-9780b2158/',
    social_icon: 'bx bxl-linkedin'
  },
  {
    id: '1sljasdd1,mns',
    link: 'https://www.instagram.com/faiz_qadri_2/',
    social_icon: 'fa fa-instagram'
  }
]

const Intro = () => {

  // const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    //   setIsFetching(false)
    // }, 3000)

    document.title = 'Muhammad Faiz';
  }, []);
  // if (isFetching) return "loading";

  return (
    <>
      {IntroData &&
        IntroData.map((detail) => (
          <section className=" intro-page" id="home" key={detail.id}>
            <div className="decorations">
              <div className="decor-dot2">
                <img src={decor3} alt="" />
              </div>

              <div className="parcol"></div>
            </div>
            <div className="small-intro">
              <div className="intro-row">
                <div className="col-lg-5  col-md-6 col-sm-12 intro-left">
                  <div className="intro-name">
                    <h3
                      className="hello"
                      data-aos="fade-down"
                      data-aos-duration="1500"
                    >
                      {detail.job_title}
                    </h3>
                    <h3
                      className="name"
                      data-aos="fade-down"
                      data-aos-duration="1600"
                    >
                      Hey! I Am
                    </h3>
                    <h3
                      className="job  text-animate"
                      data-aos="fade-down"
                      data-aos-duration="1700"
                    >
                      {detail.name}
                    </h3>
                    <p
                      className="myinfo"
                      data-aos="fade-down"
                      data-aos-duration="1800"
                    >
                      {detail.par_inro}
                    </p>
                  </div>
                  <div
                    className="intro-btns"
                    data-aos="fade-up"
                    data-aos-duration="1900"
                  >
                    <a
                      href={`mailto:${detail.hireMe_link}`}
                      className="contactMe"
                    >
                      <button className="contact-me">
                        Hire me <i class="bx bx-send "></i>
                      </button>
                    </a>
                  </div>
                  <div
                    class="intro-contact"
                    data-aos="fade-up"
                    data-aos-duration="1800"
                  >
                    <span>Follow Me:</span>
                    <ul>
                      <li>
                        {SocialData &&
                          SocialData.map((data1) => (
                            <a
                              href={data1.link}
                              className="icon-link"
                              target="_blank"
                              rel="noopener noreferrer"
                              key={data1.id}
                            >
                              <i className={data1.social_icon}></i>
                            </a>
                          ))}
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-lg-7 col-md-6 col-sm-12 left-img "
                  data-aos="fade-down-left"
                >
                  <div className="ff">
                    {/* <img
                      className="intro-img"
                      src="https://drive.google.com/uc?id=1iyVyaGyw5HniEugxd1-qZ54rpFpn2UTc"
                      https://drive.google.com/file/d/1K-C1IVFoMla-nTMWr0QRIqARKW4b6OLU/view?usp=sharing
                      alt=""
                    /> */}
                    <img
                      className="intro-img"
                      src={thumbnail}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
    </>
  );
};

export default Intro;
