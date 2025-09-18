import { DiJsBadge, DiPython, DiMongodb, DiReact, DiNodejs, DiMysql, DiGithubBadge } from "react-icons/di";
import { SiHtml5, SiTypescript, SiJira, SiPostman } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import   Style from"./Skills.module.css";  

function Skills() {
  return (
    <div className={Style.section}>
      <h1 className={Style.title}> My Skills</h1>
      <div className={Style.grid}>
        <div className={Style.card1}><DiPython /> <span>Python</span></div>
        <div className={Style.card2}><DiJsBadge /> <span>JavaScript</span></div>
        <div className={Style.card3}><SiHtml5 /> <span>HTML</span></div>
        <div className={Style.card4}><DiMongodb /> <span>MongoDB</span></div>
        <div className={Style.card5}><DiReact /> <span>React.js</span></div>
        <div className={Style.card6}><DiNodejs /> <span>Node.js</span></div>
        <div className={Style.card7}><FaDatabase /> <span>DSA</span></div>
        <div className={Style.card8}><SiTypescript /> <span>TypeScript</span></div>
        <div className={Style.card9}><SiJira /> <span>Jira</span></div>
        <div className={Style.card10}><DiMysql /> <span>MySQL</span></div>
        <div className={Style.card11}><SiPostman /> <span>Rest API</span></div>
        <div className={Style.card12}><DiGithubBadge /> <span>GitHub</span></div>
      </div>
    </div>
  );
}

export default Skills;
