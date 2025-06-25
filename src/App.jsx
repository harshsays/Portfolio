import { Component } from "react";
import styles from "./App.module.css";
import { Content } from "./content/content";
import { Hamburger } from "./hamburgerMenu/hamburger";


class App extends Component{

  constructor(){
    super();
    this.state={
      showMenu:false,
      contentType:"WELCOME"
    }
  }

  settingContentType=(content)=>{
    this.setState({contentType:content})
  }

  render(){
    return(
      <>
      <div id={styles.container}>
        <div id={styles.menuContainer}>
          <button onClick={()=>(this.setState({showMenu:!this.state.showMenu}))} style={{backgroundColor:"black" , border:"none"}}>
              <Hamburger show={this.state.showMenu} setContentType={this.settingContentType}/>
          </button>
        
        </div>
        <div id={styles.contentContainer}>
        <Content contentType={this.state.contentType}></Content>
        </div>
      </div>
      </>
    )
  }
}

export default App;
