import React, { Component } from 'react';
import { FaCog } from 'react-icons/fa';


export default (props) => (

  <div style={userCard}>
    <img src={props.user.picture} style={{height: "50px",  borderRadius:"50%", margin: "5px 5px 5px 5px"}}/>
    <div style={{...divChildren, fontWeight:"bold"}}><p>{props.user.name}</p></div>
    <div style={{...divChildren, fontStyle:"italic"}}><p>{props.user.email}</p></div>
    <div style={{...divChildren, }}><p>{props.user.role}</p></div>
    <div style={{...divChildren, marginLeft: "auto" }}><a><FaCog size="1.5em" onClick={() => props.openModal(props.user)}/></a></div>

  </div>
)


var divChildren = {
  margin: "20px 5px 5px 5px"
}
var userCard = {
  display:"flex",
  border:"solid 1px",
  borderRadius:"10px 10px 10px 10px",
  marginTop: "5px",
  marginLeft: "5px",
  marginRight: "5px",
  flexBasis: "50%",
  backgroundColor: "#FFFFFF"
}
