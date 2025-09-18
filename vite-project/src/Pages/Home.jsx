
import Profile from '../assets/image.png'; 
import Style from './Home.module.css';

function Home() {
  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <img src={Profile} alt="Usama" className={Style.profileImg} />
        <div className={Style.textSection}>
          <h1 className={Style.h1}>
            Hi,  <span className={Style.highlight}> I am Usama</span>
            
          </h1>
          <h2 className={Style.h2}>A Passionate MERN Stack Developer </h2>
          <h3 className={Style.h3}>I am a passionate web developer skilled in building responsive and user-friendly applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). I focus on writing clean, efficient, and maintainable code while ensuring smooth user experiences. As a fresher, I am eager to learn, adapt, and grow by exploring new technologies and contributing to innovative projects. My goal is to apply my skills effectively and create impactful solutions that add value. </h3>
          <a  className={Style.btn}   href="/Usama.pdf" target="_blank" rel="noopener noreferrer">
       My Resume 
          </a>
        </div>
      </div>
      
    </div>
  );
  
}

export default Home;

