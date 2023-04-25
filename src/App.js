import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/NavBar/Footer/Footer";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";



function App() {
  return (
    <div className="App">

      <NavBar/>

      {/* <div className={styles.animatedBackground} /> */}

      {/* <NavBar/> */}

      <div id={styles.intro} className={styles.intro}>
        <h1>Hey, I'm Moris Khoudari</h1>
        <p>Full Stack Web Developer</p><br/>
        <br/><img className={styles.myPic} src={`${process.env.PUBLIC_URL}/images/me.png`} />
      </div>

      {/* <img className={styles.myPic} src={process.env.PUBLIC_URL+"/images/me.png"} /> */}

      <Projects/>

      <Contact/>

      <Footer/>

    </div>
  );
};

export default App;
