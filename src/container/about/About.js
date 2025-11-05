import { useEffect } from "react";
import styles from "./css/about.module.scss";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";

import TechSkill from "@component/techSkill/TechSkill";
import SectionHeading from "@component/sectionHeading/SectionHeading";

import { skills } from "@data/skills";
import { about } from "@data/sectionHeading";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".homeContainer",
        start: "bottom center",
        invalidateOnRefresh: true,
        // markers: true,
      },
    });
    tl.fromTo(
      "#aboutMeTitle",
      {
        transform: "scale(0, 0)",
      },
      {
        transform: "scale(1.3, 1.3)",
        duration: 0.5,
      }
    )
      .to("#aboutMeTitle", {
        transform: "scale(1, 1)",
        duration: 0.5,
      })
      .fromTo(
        "#aboutMeDesc",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
        },
        ">"
      )
      .fromTo(
        ".getToKnowMe",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
        },
        ">"
      )

      .fromTo(
        ".aboutMeContent",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
        },
        ">"
      )
      .fromTo(
        ".aboutMeContent1",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
        },
        "-=0.8"
      )
      .fromTo(
        ".aboutMeContent2",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
        },
        "-=0.8"
      )
      .fromTo(
        ".mySkill",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
        },
        ">"
      )
      .fromTo(
        ".skillsContainer",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
        },
        ">"
      );
    return () => tl.scrollTrigger.kill();
  }, []);

  return (
    <div className={styles.s} id="about">
      <SectionHeading {...about} />

      <div className="container">
        <div className="row">
          <div className="col-lg-1 p-0"></div>
          <div className="col-12 col-lg-5">
            <div className={`${styles.s__aboutMeContainer} aboutMeContainer `}>
              <h2 className={`${styles.s__knowMeSectionTitle} getToKnowMe`}>
                Get to know me!
              </h2>
              <p className="aboutMeContent">
                <span>Software Engineer</span> with <span>3+ years</span> of
                experience developing scalable web applications and e-commerce
                solutions. Currently building high-performance{" "}
                <span>Shopify apps</span> at <span>Proveway</span>.
              </p>
              <p className="aboutMeContent1">
                I am currently pursuing <span>Computer Engineering</span> at
                <span> GTU-ITR, Mehsana.</span> Previously completed my diploma
                in <span>Information Technology</span> from
                <span> Government Polytechnic, Gandhinagar</span> with a CGPA of{" "}
                <span>9.09/10</span>.
              </p>
              <p className="aboutMeContent2">
                Full-stack developer skilled in <span>MERN stack</span>,{" "}
                <span>Svelte</span>, and <span>AWS </span>
                serverless technologies (<span>Lambda</span>, <span>SQS</span>).
                Experienced in automated testing with{" "}
                <span>Playwright/Vitest</span> and <span>CI/CD pipelines </span>
                integration for scalable cloud applications.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={`${styles.s__skillsOuterContainer}`}>
              <h2 className={`${styles.s__skillsSectionTitle} mySkill`}>
                My skills
              </h2>

              <div className={`${styles.s__skillsContainer} skillsContainer`}>
                {skills.map((item) => {
                  return (
                    <TechSkill
                      link={item.link}
                      icon={item.icon}
                      name={item.name}
                      key={item.name}
                    />
                  );
                })}
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default About;
