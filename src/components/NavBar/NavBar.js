import styles from "./NavBar.module.scss";

export default function NavBar(){

    return(
        <>

            <nav>
                <ul>
                    <li><a className={styles.about}>About</a></li>
                    <li><a className={styles.projects}>Projects</a></li>
                    <li><a className={styles.contact}>Contact</a></li>
                </ul>
            </nav>

            

        </>
    );
};