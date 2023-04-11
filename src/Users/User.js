import React from "react";
import clases from './User.module.css'

function User(props) {

  return ( 
    <div className={clases.Users} id={props.id}> 
      <h2 className={clases.Name}> {props.fullName}</h2>
      <p className={clases.UserName}> {props.userName}</p>
      <p className={clases.UserData}> <span>COMPANY</span>  <span>{props.company}</span> </p>
      <p className={clases.UserData}> <span>EMAIL</span> <span>{props.email}</span> </p>
      <p className={clases.UserData}> <span>PHONE</span> <span>{props.phone} </span></p>
      <p className={clases.UserData}> <span>WEBSITE</span> <span>{props.website} </span></p>
      <button className={clases.UserBtn} onClick={props.click}>Remove User</button>
    </div>
    );
}

export default User;