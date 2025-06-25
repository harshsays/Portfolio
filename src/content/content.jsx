import { Component } from "react";
import styles from "./content.module.css";

class Content extends Component{

    render(){
        return (
            <>
            <div id={styles.content}>
                <div id={styles.content_header}>
                    <span style={{fontSize:"2rem",color:"rgba(121, 53, 230, 0.582)",textShadow:"15px 10px  8px" }}>{this.props.contentType}</span>
                </div>
                <div id={styles.content_content}>
                    
                </div>
            </div>
            </>
        )
    }

}

export {Content};
