import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap/dist/gsap';
import TechIcon from '../Techicon';
import Image from 'next/image';
import styles from '../css/projects.module.scss';

const RightProjects = ({
  projectName,
  projectInfo,
  projectImage,
  projectLink,
  projectIcon,
  projectIcon1,
  projectIcon2,
  projectIcon3,
  iconName,
  iconName1,
  iconName2,
  iconName3,
}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      '.ProjectRAnimation',
      {
        x: 50,
        autoAlpha: 0,
        duration: 1,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.Project',
          //   markers: true,
          start: 'top center',
          triggerActions: 'play none none reverse',
          end: 'bottom bottom ',
        },
      }
    );
    gsap.fromTo(
      '.overlay-left',
      {
        x: -50,
        autoAlpha: 0,
        duration: 1,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.Project',
          // markers: true,
          start: 'top center',
          triggerActions: 'play none none reverse',
          end: 'bottom bottom ',
        },
      }
    );
  }, []);
  return (
    <>
      <div className={`${styles.s} ${styles.s__reverseGridForMobile} Project`}>
        <div className="row">
          <div className="col-6">
            <div className={styles.s__secondSectionContainer}>
              <a href={projectLink} rel="noreferrer" target="_blank">
                <div className={`${styles.s__imgContainer} overlay-left`}>
                  <div className={styles.s__overlay}></div>
                  <div className={styles.s__borderedOverlay}></div>
                  <Image
                    src={projectImage}
                    className={styles.s__img}
                    layout={`fill`}
                    alt="project image"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className={`${styles.s__container} ProjectRAnimation`}>
              <h2 className={styles.s__projectTitle}>
                <a
                  className={styles.s__link}
                  href={projectLink}
                  rel="noreferrer"
                  target="_blank"
                >
                  {projectName}
                </a>
              </h2>
              <div className={styles.s__projectDescContainer}>
                <h4 className={styles.s__projectDesc}>{projectInfo}</h4>
                <div className="d-flex flex-wrap">
                  <TechIcon
                    noLeftPadding={true}
                    TechIcon={projectIcon}
                    TechName={iconName}
                  />
                  <TechIcon
                    noLeftPadding={false}
                    TechIcon={projectIcon1}
                    TechName={iconName1}
                  />
                  <TechIcon
                    noLeftPadding={false}
                    TechIcon={projectIcon2}
                    TechName={iconName2}
                  />
                  <TechIcon
                    noLeftPadding={false}
                    TechIcon={projectIcon3}
                    TechName={iconName3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightProjects;
