import styles from "./header.module.css";


function Header({show:hh}){
    return (
        <>
        <div className={styles.header}>
            <div className={styles.left_side_of_header}>
                <div className={styles.logoContainer}>
                    <img src="../../../public/letter-h_17966868.png" alt="LOGO_pic" />
                    </div>
            </div>
            <div className={styles.right_side_of_header}>
                <div className={styles.header_buttons_container}>
                     <a  onClick={()=>hh("home")}>HOME</a>
                     <a  onClick={()=>hh("about")}>ABOUT</a> 
                     <a  onClick={()=>hh("skills")}>SKILLS</a> 
                     <a  onClick={()=>hh("projects")}>PROJECTS</a>
                     <a  onClick={()=>hh("contact")}>CONTACT</a>
                </div>
            </div>
        </div>
        </>
    )    
}
export {Header}