import { Component } from "react";
import styles from "./hamburger.module.css";
import hamburger from "../assets/hamburger.png"

class Hamburger extends Component{

    constructor(){
        super();
        this.state={
            show:false
        }
    }

    render(){
        return (
            <>
           <img loading ="lazy" style={{height:"3rem",width:"3rem",cursor:"grab" ,position: "absolute", zindex: 1,borderRadius:"1.4rem"}} src={hamburger}></img>
            {this.props.show?<ul  className={styles.hamburgerList}>
                <li  onClick={()=>(this.props.setContentType("ABOUT"))}>About</li>
                <hr />
                <li onClick={()=>(this.props.setContentType("SKILLS"))}>Skills</li>
                <hr />
                <li onClick={()=>(this.props.setContentType("CONTACT"))}>Contact</li>
              
            </ul>:null}
            
            </>
        )
    }
}

export {Hamburger}