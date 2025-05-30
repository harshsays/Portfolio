import styles from "./contact.module.css";
function Contact(){
    return(
        <>
        <div className={"contentShow"}>
            <u className={"large"}>contact.</u>
            <br />
            <h1>Get in touch with me via social media or send me an <a href="https://mail.google.com/mail/?view=cm&fs=1&to=harshmiishra121@gmail.com" target="_blank"
            rel="noopener noreferrer">email.</a></h1>
            <br />
            <br />
            <div className={styles.socialMediaConatiner}>
            <ul style={{listStyleType:"none"}}>
                <li><a target="_blank" href="https://www.instagram.com/sky0mishra/" ><img src="/instagram.webp" loading="lazy" alt="insta_logo"/></a></li>
                 <li><a  target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sky0mishra/" ><img src="/linkedin-logo.webp" loading="lazy" alt="linkedin_logo"/></a></li>
                  <li><a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/sky0mishra/" ><img src="/twitter-logo.webp" loading="lazy" alt="twitter_logo"/></a></li>
                

                
            </ul>
            </div>
        </div>
        </>
    )
}

export {Contact};