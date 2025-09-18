import Style from './Resume.module.css'
function Resume(){
    return( <div className={Style.Container}>
       <h1 className={Style.h1}> Education </h1>
       <div className={Style.cards}>
    <div className={Style.card}>
        <h3>2022-2025</h3>
        <h1  >B.Tech in Electrical and Electronics Engineering</h1>
        <h2>Rameshwaram Institute of Technology and Management Lucknow</h2>
        <p >I have completed B.Tech in Electrical and Electronics Engineering with a CGPA of 7.55.</p>
        
    </div>
    <div className={Style.card}>
        <h3>2019-2022</h3>
        <h1>Diploma in Electrical Engineering</h1>
        <h2>RR Institute of Modern Polytechnic Lucknow</h2>
        <p>I have completed Diploma in Electrical  Engineering with a CGPA of 8.11</p>
        
    </div>
  <div className={Style.card}>
        <h3>2018-2019</h3>
        <h1>High School</h1>
        <h2>Rama Convent Inter College Lucknow</h2>
        <p>I have completed High school with a CGPA of 9.0</p>
        
    </div>
</div>
</div>)
}
 export default Resume;