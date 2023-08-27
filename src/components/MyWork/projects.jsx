import { useGetProjectsQuery } from "../../Api/api";
import { useEffect, useState } from "react";
import "./projects.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Projects = () => {
  const { data: projects, isFetching } = useGetProjectsQuery();
  const img_300 = "https://drive.google.com/uc?id="; // https://drive.google.com/file/d/14aD7h0hG_sPL-n168i-qdOgoEkfRxSFT/view?usp=sharing

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    navText: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      310: {
        items: 1,
      },
      500: {
        items: 1,
      },
      600: {
        items: 1,
      },
      740: {
        items: 2,
      },
      1000: {
        items: 2.7,
      },
      1300: {
        items: 3,
      },
      1440: {
        items: 3,
      },
    },
  };
  const [projectsDetails, setProjectsDetails] = useState(projects);
  useEffect(() => {
    setProjectsDetails(projects);
    console.log(projectsDetails);
  }, [projectsDetails, projects]);
  if (isFetching) return "loading";

  const ProjectsData = [
    {
      about_avatar: '14aD7h0hG_sPL-n168i-qdOgoEkfRxSFT',
      language_used: 'React Native | Typescript | BLE',
      Project_title: 'Dometic Climate',
      Project_info: "This app serves as a bridge between various devices manufactured by Dometic. By leveraging Bluetooth technology, we enable seamless communication between the app and the devices. Users can conveniently manage and control these devices through the intuitive interface of the application.",
      demo_link: 'https://apps.apple.com/gb/app/dometic-climate/id1660906196'
    },
    {
      about_avatar: '1t3TUoQ7tiUtLxLxSNvHFPxg6y9DB6Dgh',
      language_used: 'React Native | Typescript | Google Map',
      Project_title: 'Ahlsell',
      Project_info: "This application focuses on providing a seamless shopping experience for electronic products. The app encompasses a wide range of products, including electrical, mechanical, and household items, among others. And the organization operates stores in Sweden, Finland, and Norway.",
      demo_link: 'https://apps.apple.com/se/app/ahlsell-mobilbutik/id1617272826'
    },
    {
      about_avatar: '1cAOpTPcfNX6PhD_iB4Y9it-TdiOAMztq',
      language_used: 'React Native | Typescript',
      Project_title: 'Trusted Messaging',
      Project_info: "This application primarily focuses on running campaigns for messages and calls. Users can create campaigns and specify whether it will be a message or call campaign. For call campaigns, users can include a voice message, while for message campaigns, they can provide a text message.",
      demo_link: 'https://apps.apple.com/np/app/trusted-messaging-titan/id1587746441'
    }, //https://drive.google.com/file/d/1oreLeWnqQiy1nI8AfqsOOQzrDRDt3cvV/view?usp=sharing
    {
      about_avatar: '1A8MTrDG2qAVV7oBrx4r_CNkHJdqfnX5j',
      language_used: 'React Native | Typescript | Firebase',
      Project_title: 'Kamaee',
      Project_info: "This application is similar to the popular platform Fiverr. However, the key distinction lies in the focus of the services offered. While Fiverr primarily caters to IT-related tasks, Kamaee is specifically designed for non-IT workers such as electricians, plumbers etc but it also tackles IT workers.",
      demo_link: 'https://kamaee.pk/'
    },
    {
      about_avatar: '1oreLeWnqQiy1nI8AfqsOOQzrDRDt3cvV',
      language_used: 'React Native | Typescript | Firebase',
      Project_title: 'Mood Social',
      Project_info: "Mood Social gives you a full overview of things to do in your city. Find exciting activities, places and people based on what you are in the Mood for and experience them together. Match with people & friends who are in the same mood as you based on activities in your area",
      demo_link: 'https://apps.apple.com/pk/app/mood-social-app/id1403003910?platform=iphone'
    },
  ]

  return (
    <div className="mywork " id="work">
      <div className="mywork-title">
        <h2>Check Out My Reacet Projects</h2>

        <h3>My Work</h3>
      </div>
      <div className="project-row">
        {ProjectsData?.length && (
          <OwlCarousel className="owl-theme" {...options}>
            {ProjectsData?.map((details) => (
              <div className="project" data-aos="fade-up">
                <div className="project-img">
                  <img
                    src={`${img_300}${details.about_avatar}`}
                    alt=""
                    className="work-img"
                  />
                </div>

                <div className="date-posted">
                  <div className="who-post">
                    <p className="admin">{details.language_used}</p>
                  </div>
                </div>
                <div className="work-details">
                  <h2>{details.Project_title}</h2>
                  <p className="work-info">{details.Project_info}</p>
                  <div className="project-links">
                    <a
                      href={details.demo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i class="fa fa-mobile" aria-hidden="true"></i>&nbsp;
                        Appliction Link
                      </h6>
                    </a>
                    {/* <a
                      href={details.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i class="fa fa-github" aria-hidden="true"></i> &nbsp;
                        Source Code
                      </h6>
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        )}
      </div>
    </div>
  );
};

export default Projects;
