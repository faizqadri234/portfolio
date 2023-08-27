import "./Services.css";
import { useGetServicesQuery } from "../../Api/api";
import { useEffect, useState } from "react";

const ServiceData = [
  {
    id: 'lshkd2342',
    service_name: 'Application Development',
    service_description: "I specialize in React Native development, creating seamless cross-platform apps that shine on both iOS and Android",
    iconImage: 'https://icon-library.com/images/mobile-applications-icon/mobile-applications-icon-22.jpg',
    bgIcon: 'fas fa-code-branch'
  },
  {
    id: 'lshkd2sdf342',
    service_name: 'Web Development',
    service_description: "With expertise in React and Next.js, I build engaging websites that combine dynamic functionality with seamless navigation for an exceptional user experience",
    iconImage: 'http://drive.google.com/uc?id=1Xou8hPivlKoRgGi5p68iSQ90cU0Zozq6',
    bgIcon: 'fa fa-pen'
  },
  {
    id: 'lshkxcvxcd2342',
    service_name: 'Api Integration',
    service_description: "I offer Api integration service in existing applications or in software i create from scratch",
    iconImage: 'http://drive.google.com/uc?id=1KAJwHOx7L9gmvoe0VX8PTl1Y2vqG6etc',
    bgIcon: 'fa fa-snowflake-o'
  },
  {
    id: 'lshkd23432342',
    service_name: 'CI/CD',
    service_description: "I am well-versed in implementing robust CI/CD pipelines, automating the build, testing, and deployment processes to ensure consistent and efficient software delivery",
    iconImage: 'http://drive.google.com/uc?id=1_5eSenCCVHI4Jv-sj5GV2pk5YOTxEE0K',
    bgIcon: 'fa fa-cubes'
  }
]

const Services = () => {
  const { data: services, isFetching } = useGetServicesQuery();
  const [servicesDetails, setServicesDetails] = useState(services);
  const img_300 = "http://drive.google.com/uc?id=";

  useEffect(() => {
    setServicesDetails(services);
    console.log(servicesDetails);
  }, [servicesDetails, services]);
  if (isFetching) return "loading";

  return (
    <>
      <section id="services">
        <div className="service-container">
          <div className="service-title">
            <h2>What Service i Offer you</h2>

            <h3>Services</h3>
          </div>

          <div className="service-row">
            {ServiceData &&
              ServiceData.map((service) => (
                <div
                  className=" my-service"
                  key={service.id}
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                >
                  <div className="ser-back">
                    <img className="borderRadius" src={service.iconImage} alt="" />
                  </div>
                  <h4 className="web">{service.service_name}</h4>
                  <p className="service-info">{service.service_description}</p>
                  {/* <h6 className="learn-more">{service.learn_more}</h6> */}
                  <div class="shadow-icon">
                    <i class={service.bgIcon}></i>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
