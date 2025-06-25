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
           <img style={{height:"3rem" ,width:"3rem",cursor:"grab" ,position: "absolute", zindex: 1}} src={hamburger}></img>
            {this.props.show?<ul style={{borderRadius:"1rem", backgroundColor:"rgb(0, 0, 0)",color:"white" ,position: "absolute", zindex: 2 ,marginTop:"4em" ,marginLeft:"4em",listStyleType:"none"
}}>
                <li onClick={()=>(this.props.setContentType("ABOUT"))}>About</li>
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