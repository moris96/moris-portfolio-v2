import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/NavBar/Footer/Footer";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

import Popup from "reactjs-popup";



function App() {
  return (
    <div className="App">

      <NavBar/>

      {/* <div className={styles.animatedBackground} /> */}

      {/* <NavBar/> */}

      <div id={styles.intro} className={styles.intro}>
        <h1>Hey, I'm Moris Khoudari</h1>
        <p>Full Stack Web Developer</p><br/>
        <br/><img className={styles.myPic} src={`${process.env.PUBLIC_URL}/images/me.png`} /><br/><br/><br/><br/>

        <br/><Popup trigger={<button className={styles.expBtn}>Click for skills</button>} position="right center">
                      <span className={styles.skills}>
                      <li>JavaScript</li> 
                      <li>TypeScript</li> 
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>React.js</li>
                      <li>Angular.js</li> 
                      <li>MongoDB</li>
                      <li>non-SQL databases</li>
                      <li>Python</li>
                      <li>C++</li>
                      <li>Flask</li>
                      <li>Django</li>
                      <li>HTML</li>
                      <li>HTML5</li>
                      <li>CSS</li>
                      <li>CSS3</li>
                      <li>RESTful routes </li>
                      <li>APIs</li>
                      <li>Heroku deployment & similar</li>
                      <li>JWT Web Tokens</li>
                      <li>HTTP verbs</li>
                      <li>MVC Patterns</li>
                      </span>
        </Popup>
      </div>

      {/* <img className={styles.myPic} src={process.env.PUBLIC_URL+"/images/me.png"} /> */}

      <Projects/>

      <Contact/>

      <Footer/>

    </div>
  );
};

export default App;
