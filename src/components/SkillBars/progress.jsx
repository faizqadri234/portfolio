import "./progress.css";
import { useGetLanguagesIconsQuery } from "../../Api/api";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import $ from "jquery";

var nav = $("body");

if (nav.length) {
  var offsetTop = nav.offset().top;
  $(window).on("scroll", function () {
    var height = $(window).height();
    if ($(window).scrollTop() + height > offsetTop) {
      $(".fullwidth").each(function () {
        $(this)
          .find(".skill-bar")
          .animate(
            {
              width: $(this).attr("data-percent"),
            },
            2000
          );
      });
    }
  });
}

const Progress = () => {
  const { data: langIcons, isFetching } = useGetLanguagesIconsQuery();

  const [icons, setIcons] = useState(langIcons);

  useEffect(() => {
    setIcons(langIcons);
  }, [langIcons]);

  if (isFetching) return "loading";

  const responsive = {
    0: {
      items: 1,
    },
    380: {
      items: 1,
    },
    512: {
      items: 2,
    },
    665: {
      items: 3,
    },
    767: {
      items: 3,
    },
    870: {
      items: 4,
    },
    1024: {
      items: 6,
    },
    1265: {
      items: 6,
    },
  };

  const SkillsData = [
    {
      id: '1nls2lnasl2',
      lang_name: 'React Native',
      icon: "https://img.icons8.com/color/48/null/react-native.png",
      exp_level: 'Experienced'
    },
    {
      id: '1lnssasl2',
      lang_name: 'Typescript',
      icon: "https://avatars.githubusercontent.com/u/46634674?v=4&s=160",
      exp_level: 'Experienced'
    },
    {
      id: '1lnssassdfsdsl2',
      lang_name: 'Redux',
      icon: "https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png",
      exp_level: 'Experienced'
    },
    {
      id: 'alskdhskjhkjdsaflhl',
      lang_name: 'JavaScript',
      icon: "https://img.icons8.com/color/48/null/javascript--v1.png",
      exp_level: 'Experienced'
    },
    {
      id: 'alskasdfdhflkjlkjlhl',
      lang_name: 'Git',
      icon: "https://img.icons8.com/color/48/null/git.png",
      exp_level: 'Experienced'
    },
    {
      id: 'alskdhfslkdjflhl',
      lang_name: 'React',
      icon: "https://img.icons8.com/color/48/null/react-native.png",
      exp_level: 'Intermediate'
    },
    {
      id: 'sdfsdf,msdfsf',
      lang_name: 'CI/CD',
      icon: "https://static-00.iconduck.com/assets.00/cicd-icon-510x512-hsx603wg.png",
      exp_level: 'Experienced'
    },
    {
      id: 'alskdhfdsdfdffasdslkdjflhl',
      lang_name: 'Jira',
      icon: "https://wac-cdn.atlassian.com/dam/jcr:e0cedee5-a180-40ad-b7c3-a66d6e60f483/jira-app-adg3.svg?cdnVersion=1124",
      exp_level: 'Experienced'
    },
  ]

  const items = SkillsData?.map((details4) => {
    return (
      <div className="mylang" title={details4.lang_name} key={details4.id}>
        <div className="lang-info">
          <div className="lang-img">
            <img src={details4.icon} alt="" />
          </div>
          <h3>{details4.lang_name}</h3>
          <p className={`${details4.exp_level}`}>{details4.exp_level}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <section id="skills">
        <div className="progress-container">
          <div className="progress-title">
            <h2>My Skills Progress so far</h2>

            <h3>My Skills</h3>
          </div>
          <div className="progress-row2">
            <div className="lang">
              <AliceCarousel
                infinite
                autoPlay
                disableButtonsControls
                disableDotsControls
                mouseTracking
                autoPlayInterval={1000}
                items={items}
                responsive={responsive}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Progress;
