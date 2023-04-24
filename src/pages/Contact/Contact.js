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

            {/* email form */}
            <form className={styles.OGform} action="mailto:moriskhoudari@gmail.com" method="GET" target="_blank">
                <h1 className={styles.title}>Start Email to moriskhoudari@gmail.com</h1>
                <div className={styles.field}><label className={styles.label} for="subject">Email Subject</label>
                    <input name="subject" id={styles.subject} type="text" className={styles.input} value="Example Email Subject" /></div>
                <div className={styles.field}><label className={styles.label} for="body">Email Body</label>
                    <textarea className={styles.textarea} name="body" id={styles.body}>Example Email Body</textarea></div>
                <div><input type="submit" value="Create Email" className={styles.emailButton} /></div>
            </form>
        </>
    );
};