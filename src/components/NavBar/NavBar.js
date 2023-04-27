import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";

export default function NavBar(){

    return(
        <>

            <nav>
                <ul>
                    <Link to="/"><li><a className={styles.about}>About</a></li></Link>
                    <li><a className={styles.projects}>Projects</a></li>
                    <li><a className={styles.contact}>Contact</a></li>
                </ul>
            </nav>

            

        </>
    );
};