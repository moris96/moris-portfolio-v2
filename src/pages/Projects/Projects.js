import styles from "./Projects.module.scss";


export default function Projects(){

    return(
        <>
            <div id={styles.work} className={styles.work}>
            <h2 className={styles.workHeader}>Here are some of my cool projects:</h2>
            <h2 className={styles.workHeader}>dummy account for logins: email: red@red.com || password: red123</h2>
              {/* game site */}
              <a href="https://gamesite.herokuapp.com/" target="_blank" className={styles.project}>
                  <img className={styles.projectPic} src={`${process.env.PUBLIC_URL}/images/gameSite.png`} />  
                  <div className={styles.projectTitle}>React App: Game Site</div>
                </a>

              {/* pokedex React */}
              <a href="https://pokedex-reactjs-app.netlify.app/" target="_blank" className={styles.project}>
                  <img className={styles.projectPic} src={`${process.env.PUBLIC_URL}/images/pokedexReact.png`} />  
                  <div className={styles.projectTitle}>React App: Pokedex</div>
                </a>
                {/* pokebag React */}
                <a href="https://poke-bag.herokuapp.com/" target="_blank" className={styles.project}>
                  <img className={styles.projectPic} src={`${process.env.PUBLIC_URL}/images/pokebagReact.png`} />  
                  <div className={styles.projectTitle}>React App: Pokebag</div>
                </a>
                {/* pokedex Angular */}
                <a href="https://pokedex-angularjs.netlify.app/" target="_blank" className={styles.project}>
                  <img className={styles.projectPic} src={`${process.env.PUBLIC_URL}/images/pokedexAngular.png`} />  
                  <div className={styles.projectTitle}>Angular App: Pokedex</div>
                </a>
                {/* pokemon game */}
                <a href="https://poke-clone.netlify.app/" target="_blank" className={styles.project}>
                  <img className={styles.projectPic} src={`${process.env.PUBLIC_URL}/images/poke.png`} />  
                  <div className={styles.projectTitle}>Game: Pokemon Clone</div>
                </a>
              {/* tower defense game */}
                <a href="https://moris96.github.io/tower-defense-game/index.html" target="_blank" className={styles.project}>
                  <img className={styles.projectPic} src={`${process.env.PUBLIC_URL}/images/project1.png`} />  
                  <div className={styles.projectTitle}>Game: Zombies vs Soldiers</div>
                </a>

                <a className={styles.showAll} href="https://github.com/moris96?tab=repositories" target="_blank">Show All</a>
            </div>


            {/* <a className={styles.showAll} href="https://github.com/moris96?tab=repositories" target="_blank">Show All</a> */}

        </>
    );
};