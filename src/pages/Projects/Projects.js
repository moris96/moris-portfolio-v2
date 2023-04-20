import styles from "./Projects.module.scss";


export default function Projects(){

    return(
        <>
            <div id={styles.work} className={styles.work}>
                <h2 className={styles.workHeader}>Here are some of my cool projects:</h2>
                <a href="https://moris96.github.io/tower-defense-game/index.html" target="_blank" className={styles.project}>
                  <img className={styles.projectPic} src={process.env.PUBLIC_URL+"/images/project1.png"} />  
                  <div className={styles.projectTitle}>Game: Zombies vs Soldiers</div>
                </a>
                <a href="https://poke-clone.netlify.app/" target="_blank" className={styles.project}>
                  <img className={styles.projectPic} src={process.env.PUBLIC_URL+"/images/poke.png"} />  
                  <div className={styles.projectTitle}>Game: Pokemon Clone</div>
                </a>
            </div>


            <a className={styles.showAll} href="https://github.com/moris96?tab=repositories" target="_blank">Show All</a>

        </>
    );
};