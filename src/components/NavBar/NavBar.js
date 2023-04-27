import styles from "./NavBar.module.scss";

import { Link } from "react-router-dom";


import Projects from "../../pages/Projects/Projects";

export default function NavBar(){

    return(
        <>

            <nav>
                <ul>

                    {/* <Link to="/"><li><a href="/" className={styles.about}>About</a></li></Link> */}
                    <li><a href="/" className={styles.about}>About</a></li>

                    <li><a className={styles.projects}>Projects</a></li>

                    {/* <Link to="/projects"><li><a className={styles.projects}>Projects</a></li></Link> */}






                    <li><a className={styles.contact}>Contact</a></li>
                </ul>
            </nav>

            

        </>
    );
};