import { About } from "../about/about";
import { Skill } from "../skills/skill";
import { Project } from "../projects/project";
import { Contact } from "../contact/contact";
function Content({show}){
    return (
        <>
        {show=="contact"?<Contact/>:show=="skills"?<Skill/>:show=="projects"?<Project/>:<About/>}
        </>
    )    
}
export {Content}