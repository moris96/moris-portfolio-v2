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

                <h1 className={styles.title}>If you want to talk, collaborate on a project, or simply say hi, send an email to moriskhoudari@gmail.com</h1>
                <h1 className={styles.title}>Let's talk!</h1>


                {/* email form */}
                <form className={styles.OGform} action="mailto:moriskhoudari@gmail.com" method="GET" target="_blank">
                    <div className={styles.field}><label className={styles.label} for="subject">Subject</label><textarea className={styles.textarea} name="subject" placeholder="subject..."></textarea>
                    </div>
                    
                    <div className={styles.field}><label className={styles.label} for="body">Message</label>
                        <textarea className={styles.textarea} name="body" id={styles.body} placeholder="write something..." /></div>

                    <div><input type="submit" value="Send Email" className={styles.emailButton} /></div>
                </form>

                {/* certificates */}
                <h2 className={styles.pro}>Professional Certificates:</h2>
                <div className={styles.certif}>
                <h3>Software Engineering</h3>
                <form method="get" action="https://docs.google.com/document/d/1Qoa0OXDGRgFEmClIO1tK4oo8LSosRpizQPL3EVj0RkI/edit" target="_blank">
                    <button className={styles.certBtn} type="submit">JavaScript</button>
                </form>
                <h3>Python Programming</h3>
                <form method="get" action="https://docs.google.com/document/d/1OdLfmiwk7o4MkqKhx0Y1ZxncJH5xHiX2oVE-OtlLJJg/edit" target="_blank">
                    <button className={styles.certBtn} type="submit">Python</button>
                </form>
                </div>

                {/* resume download button
                <h2>Click here to download my resume!</h2>
                <form method="get" action="https://drive.google.com/file/d/1lKA8mnPjCLNDh_hL8ye5CA8g51PYHZSY/view?usp=share_link" target="_blank">
                    <button className={styles.resume} type="submit">Resume</button>
                </form> */}
                

            </div>
        </>
    );
};