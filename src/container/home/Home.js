import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import styles from "./css/home.module.scss";

import Link from "next/link";

import SideBar from "layout/sideBar/SideBar";

const Home = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".homeContainer",
        start: "top center",
        end: "+=800 top ",
        // markers: true,
        invalidateOnRefresh: true,
      },
    });
    tl.current = gsap
      .timeline()
      .fromTo(
        ".firstLine",
        {
          autoAlpha: 0,
          y: "-100%",
          duration: 1,
        },
        {
          autoAlpha: 1,
          y: "0%",
          duration: 1,
        }
      )
      .fromTo(
        ".secondLine",
        {
          autoAlpha: 0,
          y: "-100%",
          duration: 1,
        },
        {
          autoAlpha: 1,
          y: "0%",
          duration: 1,
        },
        "-=0.6"
      )
      .fromTo(
        ".thirdLine",
        {
          autoAlpha: 0,
          y: "-100%",
          duration: 1,
        },
        {
          autoAlpha: 1,
          y: "0%",
          duration: 1,
        },
        "-=0.7"
      )
      .fromTo(
        ".slideDown",
        {
          y: "0%",
        },
        {
          ease: "SlowMo.ease.config(0.7, 0.7, false)",
          y: "-100%",
          duration: 1,
        },
        "+=.5"
      )
      .to(
        ".slideUp",
        {
          y: "-100%",
          duration: 1,
        },
        "-=0.8"
      )
      .fromTo(
        ".title",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,

          duration: 1,
        },
        "-=0.5"
      )
      .fromTo(
        ".subTxt",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,

          duration: 1,
        },
        "-=.6"
      )

      .fromTo(
        ".projectBtn",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,

          duration: 1,
        },
        "-=.5"
      )
      .fromTo(
        ".navItem1",
        {
          autoAlpha: 0,
          x: "100%",
        },
        {
          x: "-20%",
          autoAlpha: 1,

          duration: 0.5,
        },
        "-=.5"
      )
      .to(
        ".navItem1",
        {
          x: "0%",
          duration: 0.2,
        },
        ">"
      )
      .fromTo(
        ".navItem2",
        {
          autoAlpha: 0,
          x: "100%",
        },
        {
          x: "-10%",
          autoAlpha: 1,

          duration: 0.5,
        },
        "-=.5"
      )
      .to(
        ".navItem2",
        {
          x: "0%",
          duration: 0.2,
        },
        ">"
      )
      .fromTo(
        ".navItem3",
        {
          autoAlpha: 0,
          x: "100%",
        },
        {
          x: "-10%",
          autoAlpha: 1,

          duration: 0.8,
        },
        "-=.5"
      )
      .to(
        ".navItem3",
        {
          x: "0%",
          duration: 0.2,
        },
        ">"
      )
      .fromTo(
        ".logo",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,

          duration: 1.5,
        },
        "<"
      )
      .fromTo(
        ".socialMediaContainer",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 2,
        },
        "-=.8"
      );
  }, []);

  return (
    <div className={`${styles.s} homeContainer`} id="home">
      <div className={`${styles.slider} slideDown`}>
        <div className={`${styles.slider__centerTxt} slideUp`}>
          <div className={`${styles.slider__firstLine} firstLine`}>
            Welcome to <br />
          </div>
          <div className={`${styles.slider__secondLine} secondLine`}>
            &lt;
            <span className={`${styles.slider__title} secondLine`}>
              Dharmik
            </span>
            /&gt;
          </div>
          <div className={`${styles.slider__thirdLine} thirdLine`}>
            {" "}
            Portfolio website.
          </div>
        </div>
      </div>

      <SideBar />

      <div className={`${styles.s__titleContainer} title`}>
        <span className={styles.s__titleTxt}>HEY, I&apos;M</span>{" "}
        <h1 className={styles.s__myName}>DHARMIK UPADHYAYA</h1>
      </div>
      <div className={`${styles.s__subTxt} subTxt`}>
        Full-stack developer with experience building scalable web applications
        and modern user interfaces. Proficient in JavaScript, React, AWS
        Services, and implementing comprehensive testing strategies with CI/CD
        pipelines.
      </div>
      <Link href="#projects">
        <a>
          {" "}
          <button className={`${styles.s__projectBtn} projectBtn`}>
            Projects
          </button>
        </a>
      </Link>
    </div>
  );
};

export default Home;
