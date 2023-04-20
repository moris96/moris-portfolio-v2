import styles from "./Contact.module.scss";


export default function Contact(){

    return(
        <>
            <div id={styles.contact} className={styles.contact}>
                <div className={styles.header}>
                    <h1>Contact Me!</h1>
                    <p>My socials:</p>
                </div>
                <a href="https://www.linkedin.com/in/moris-khoudari-abady/" target="_blank" className={styles.contactDetails}>Linkedin</a>
                <a href="https://github.com/moris96" target="_blank" className={styles.contactDetails}>Github</a>
            </div>
        </>
    );
};