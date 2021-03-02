import React from 'react'; 
import './Style.css'
import Images1 from './pictures/images.png';

const ComponentTest=(props)=>{
    return(
        <div  className="InnerContainer">
            <img src={props.Image} className="pic" className={props.ImageClass}></img>
             <div className="Text">
               <h3>{props.Name}</h3>
               <h4>{props.Comment}</h4>
             </div>
             <p className="time">{props.Time}</p>
        </div>
    )
}

export default ComponentTest;
