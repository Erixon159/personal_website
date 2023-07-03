import * as React from "react";
import { JetBrains_Mono, Poppins, Bebas_Neue } from '@next/font/google';
import { DownloadButton } from "@components/DownloadButton";
import styles from "./Resume.module.css";

export const code = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400']
});

export const header = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400']
});

export const text = Poppins({
  subsets: ['latin'],
  weight: ['400']
});

export const Resume: React.FC = () => {
  return (
    <div className={[styles.container, text.className].join(' ')}>
      <div className={[styles.section, styles.header].join(' ')}>
        <h1 className={header.className}>Resume</h1>
      </div>
      <div className={[styles.section, styles['contact-info']].join(' ')}>
        <h3>
          <code className={code.className}>::contact information</code>
        </h3>
        <p>Phone: <a href="tel:+17788474681">+1 778 847 4681</a><br/>Email: <a href="mailto:erikhricka@gmail.com">erikhricka@gmail.com</a></p>
      </div>
      <div className={[styles.section, styles.summary].join(' ')}>
        <h3>
          <code className={code.className}>::summary</code>
        </h3>
        <p>
          Highly motivated <span className={styles.important}>web developer</span> with a master&apos;s degree in computer
          science and extensive experience in both <span className={styles.important}>back-end and front-end</span> development.
          Skilled in PHP, Ruby on Rails, JavaScript, TypeScript and Vue.js with experience in deploying multi-tenant applications with zero downtime.
          Strong background in <span className={styles.important}>agile methodologies</span> and a proven ability to
          deliver <span className={styles.important}>high-quality solutions</span>. Excellent communication
          and <span className={styles.important}>problem-solving skills</span> with a passion for tackling challenges. Seeking
          new opportunities as a developer in <span className={styles.important}>Singapore</span>.
        </p>
      </div>
      <div className={[styles.section, styles.education].join(' ')}>
        <h3>
          <code className={code.className}>::education</code>
        </h3>
        <p>
          <span className={styles.important}>Master of Science in Computer Science</span>, Slovak University of
          Technology in Bratislava, June 2022
        </p>
        <blockquote>
          <ul>
            <li>Specialized in <span className={styles.important}>applied informatics</span></li>
          </ul>
        </blockquote>
        <p>
          <span className={styles.important}>Erasmus study program</span>, Technical University of Munich, September 2020 - March 2021
        </p>
        <blockquote>
          <ul>
            <li>Study conducted in English language</li>
          </ul>
        </blockquote>
        <p>
          Bachelor of Science in Applied Informatics, Slovak University of
          Technology in Bratislava, June 2019
        </p>
        <blockquote>
          <ul>
            <li>Specialized in <span className={styles.important}>applied informatics</span></li>
          </ul>
        </blockquote>
      </div>
      <div className={[styles.section, styles['work-exp']].join(' ')}>
        <h3>
          <code className={code.className}>::work experience</code>
        </h3>
        <p><span className={styles.important}>Ruby on Rails Developer</span>, MTrip Inc., <span className={styles.important}>September 2022 - Present</span></p>
        <blockquote>
          <ul>
            <li>
              Develop and maintain <span className={styles.important}>multi-tenant</span> back-end and front-end components using <span className={styles.important}>Ruby
              on Rails, JavaScript, and Vue.js</span>
            </li>
            <li>
              Use third-party APIs (<span className={styles.important}>Soap, Rest</span>) to develop complex workflows used in both back-end and front-end
            </li>
            <li>
              Improve, maintain and optimize database (<span className={styles.important}>MySQL</span>) for quick and easy data querying
            </li>
            <li>
              Conduct testing (<span className={styles.important}>RSpec</span>) and code reviews for quality assurance
            </li>
            <li>
              Conducting deployments using <span className={styles.important}>Engine Yard and Linux</span>
            </li>
          </ul>
        </blockquote>
        <p>
          <span className={styles.important}>Ruby on Rails Developer</span>, Softpoint s.r.o., <span className={styles.important}>April 2021 - August 2022</span>
        </p>
        <blockquote>
          <ul>
            <li>
              Develop and maintain <span className={styles.important}>multi-tenant</span> back-end and front-end components using <span className={styles.important}>Ruby
              on Rails, JavaScript ,Vue.js and PostgreSQL</span>
            </li>
            <li>
              Conducted code reviews, performed testing (<span className={styles.important}>RSpec</span>), and ensured
              high-quality delivery
            </li>
            <li>
              Collaborate with team members on deployments using <span className={styles.important}>Docker and Linux</span>
            </li>
            <li>
              Communicated with clients and <span className={styles.important}>provided training to a junior developer</span>
            </li>
          </ul>
        </blockquote>
        <p>
          <span className={styles.important}>Junior PHP Developer</span>, Garwan Consulting s.r.o., <span className={styles.important}>July 2019 - July 2022</span>
        </p>
        <blockquote>
          <ul>
            <li>
              Contributed to back-end (<span className={styles.important}>PHP, Laravel, MySQL, MongoDB</span>) and front-end (<span className={styles.important}>JavaScript, React.js</span>) development
            </li>
            <li>Assisted with deployments using <span className={styles.important}>Docker and Linux</span></li>
            <li>
              Designed and maintained client-specific solutions and actively <span className={styles.important}>communicated with clients</span>
            </li>
          </ul>
        </blockquote>
      </div>
      <div className={[styles.section, styles.skills].join(' ')}>
        <h3>
          <code className={code.className}>::skills</code>
        </h3>
        <blockquote>
          <ul>
            <li>Programming Languages/Frameworks: Ruby on Rails, Vue.js, Next.js, React.js, JavaScript, TypeScript, PHP, Laravel</li>
            <li>Databases: MySQL, PostgreSQL, MongoDB</li>
            <li>Testing: RSpec, Cypress</li>
            <li>Logging: Sentry</li>
            <li>Deployment: Docker, Linux, Engine Yard</li>
            <li>Design: Figma</li>
            <li>Agile Methodologies</li>
            <li>Strong problem-solving and analytical skills</li>
          </ul>
        </blockquote>
      </div>
      <div className={[styles.section, styles.certificates].join(' ')}>
        <h3>
          <code className={code.className}>::certificates</code>
        </h3>
        <blockquote>
          <ul>
            <li><span className={styles.important}>C1 IELTS Language Certificate, English</span></li>
            <li>Certificate in Agile System Engineering, AERO EDU</li>
          </ul>
        </blockquote>
      </div>
      <div className={[styles.section, styles.interests].join(' ')}>
        <h3>
          <code className={code.className}>::interests</code>
        </h3>
        <blockquote>
          <ul>
            <li>Rowing (Dragonboat)</li>
            <li>Downhill Bicycling</li>
            <li>Swimming</li>
            <li>Snowboarding</li>
            <li>Weightlifting</li>
            <li>Hiking</li>
            <li>Self development</li>
            <li>Reading about new trends in tech</li>
            <li>Creating small projects using artificial intelligence</li>
          </ul>
        </blockquote>
      </div>
      <div className={styles.section}>
        <h3>
          <code className={code.className}>::download</code>
        </h3>
        <div className={styles.download}>
          <DownloadButton
            link='/CV.pdf'
            text='Resume (PDF format)'
          />
          <DownloadButton
            link='/CV.docx'
            text='Resume (DOCX format)'
          />
        </div>
      </div>
    </div>
  );
};
