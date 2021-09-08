import React from 'react';
import "./ImageAvatar.css";

export default function ImageAvatar(props){
  return (
    <div className={"avatarImageHolder"}>
      <img className={"avatarImage"} alt="Malcom" src={props.src}/>
    </div>
  );
}