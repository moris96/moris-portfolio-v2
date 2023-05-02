import styles from './Resume.module.scss'

export default function Resume(){
    return(
        <>
            <div className={styles.resumePage}>
            {/* resume download button */}
            <h2>Click here to download my resume!</h2>
                <form method="get" action="https://drive.google.com/file/d/1lKA8mnPjCLNDh_hL8ye5CA8g51PYHZSY/view?usp=share_link" target="_blank">
                    <button className={styles.resume} type="submit">Resume</button>
                </form>
            </div>
        </>
    );
};