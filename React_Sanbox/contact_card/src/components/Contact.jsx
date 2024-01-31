import React from "react";

import phoneImg from "../images/phone-icon.png"
import mailImg from  "../images/mail-icon.png"

function Contact(props){
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src= {phoneImg}/>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mailImg} />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

// destructuring method
// function Contact({img, name, phone, email}){
//     return (
//         <div className="contact-card">
//             <img src={img}/>
//             <h3>{name}</h3>
//             <div className="info-group">
//                 <img src= {phoneImg}/>
//                 <p>{phone}</p>
//             </div>
//             <div className="info-group">
//                 <img src={mailImg} />
//                 <p>{email}</p>
//             </div>
//         </div>
//     )
// }
export default Contact