import "./Services.css";
import api from '../../images/api.png'
import web from '../../images/web.png'
import cicd from '../../images/cicd.png'

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
    iconImage: web,
    bgIcon: 'fa fa-pen'
  },
  {
    id: 'lshkxcvxcd2342',
    service_name: 'Api Integration',
    service_description: "I offer Api integration service in existing applications or in software i create from scratch",
    iconImage: api,
    bgIcon: 'fa fa-snowflake-o'
  },
  {
    id: 'lshkd23432342',
    service_name: 'CI/CD',
    service_description: "I am well-versed in implementing robust CI/CD pipelines, automating the build, testing, and deployment processes to ensure consistent and efficient software delivery",
    iconImage: cicd,
    bgIcon: 'fa fa-cubes'
  }
]

const Services = () => {

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
