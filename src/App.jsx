import styles from "./app.module.css";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Content } from "./components/content/content";
import { useEffect, useState } from "react";

function App(){
  const [insideContent,setInsideContent]=useState("");

  function chngeInsideContent(content){
    setInsideContent(content);
  }

  useEffect(()=>{
    document.title=`harshhub ${insideContent}`
  },[insideContent])

  return (
    <>
    {/* This is the header of the website */}
    <div id={styles.screen}>
       {/* This is the header of the website */}
    <div id={styles.header}>
      <Header show={chngeInsideContent}/>
    </div>
    {/* Just the separation of the header  */}
    {/* <hr id={styles.hr_style}/> */}
    {/* This is the content of the website */}
    <div id={styles.content}>
      <Content show={insideContent} />
    </div>
    {/* This is the footer of the website */}
    <div id={styles.footer}>
      <Footer />
    </div>
    </div>
    </>
  )
}

export {App};