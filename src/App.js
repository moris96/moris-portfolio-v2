import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";



function App() {
  return (
    <div className="App">
      <NavBar/>

      <div id={styles.intro} className={styles.intro}>
                <h1>Hey, I'm Moris Khoudari</h1>
                <p>Full Stack Web Developer</p>
            </div>

      <Projects/>

      <Contact/>

    </div>
  );
};

export default App;
