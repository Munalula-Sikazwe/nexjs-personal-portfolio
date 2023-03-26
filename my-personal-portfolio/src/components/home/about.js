import classes from './about.module.scss';
import { useEffect } from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section className={classes.about} id='about'>
      <div className={classes.container}>
        <h2 data-aos='slide-right'>About me</h2>
        <div className={classes.row}>
          <div className={classes.columnLeft} data-aos='fade-right'>
            <h3>
              Experienced Python and JavaScript Developer with Strong Project Management Skills
            </h3>
            <p>
              As a Python and JavaScript developer, I have built several projects and have a package listed on PyPI. I possess a deep understanding of Python and JavaScript and have experience working with databases, APIs, and other tools commonly used in web development.

              As a developer, my strengths include problem-solving, attention to detail, and the ability to work collaboratively with others. I also have strong project management skills, allowing me to plan, execute, and deliver projects efficiently.

              My work style is detail-oriented, deadline-driven, and focused on delivering high-quality code. I am comfortable working in both agile and waterfall development methodologies, depending on the needs of the project.
            </p>
          </div>

          <div className={classes.columnRight}>
            <div className={classes.imageContainer}>
              <Image
                src='/images/profile-pic-2.webp'
                width={600}
                height={600}
                alt='profile-pic'
                data-aos='fade-left'
              />
            </div>
            <div className={classes.quote} data-aos='fade-right'>
              &quot;Distinctio officiis excepturi facere incidunt ut!&quot;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
