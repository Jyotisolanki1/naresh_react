import React,{Component} from "react";

//function component
const Footer = (props) =>{
    console.log("react props",props);
    return(
        <React.Fragment>
            <footer>
             <hr/>
             <center>
                <h3>&copy; Developer Funnel {props.year} {props.month}</h3>
             </center>
            </footer>
            
        </React.Fragment>
    )                   
}
 
export default Footer;