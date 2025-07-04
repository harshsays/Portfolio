import { Component } from "react";
import styles from "./hamburger.module.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
         <LazyLoadImage
  src={hamburger}
  alt="menu"
  effect="blur"
  style={{
    height: "3rem",
    width: "3rem",
    cursor: "grab",
    position: "absolute",
    zIndex: 1,
    borderRadius: "1.4rem"
  }}
/>
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