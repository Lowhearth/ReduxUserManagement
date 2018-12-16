import React, { Component } from 'react';
import {getUsers} from '../DAO/usersDAO'
import UserCard from '../components/UserCard'
import {FaUserPlus} from 'react-icons/fa';
import ModalAddUser from '../containers/ModalAddUser';
import ModalUpdateUser from '../containers/ModalUpdateUser';


import { connect } from 'react-redux'

class UserManagement extends Component {

  constructor(props){
    super();
    this.state = {
      filter:"",
      modalAddOpened: false,
      modalUpdateOpened: false,
    }
  }

  componentDidMount(){
    console.log(getUsers())
    var users = getUsers()
    this.setState(()  =>({users: users}))
  }

  drawUsers(){
    if(typeof this.state.users != 'undefined'){
      return (
        this.letsFilter(this.props.users).map((usr) => <UserCard user={usr} openModal={this.openUpdateModal.bind(this)} closeModal={this.closeAddModal.bind(this)} />)
      )
    }

  }
  objectIncludesChars(obj, chars ){
    return (Object.keys(obj).reduce(function(a, key){
      if(obj[key].includes(chars)){
        console.log("true")
        return true;
      }else{
        return a
      }
    }, false))
  }

  setFilter(e){
    e.preventDefault()
    this.setState({filter: e.target.value})
  }

  letsFilter(users){
    var hint = this.state.filter
    return users.filter((usr) => usr.name.includes(hint) || usr.email.includes(hint) || usr.phone.includes(hint) )

  }
  openAddModal (){
    this.setState(() =>({modalAddOpened : true}))
  }
  openUpdateModal (usr){
    console.log(usr)
    this.setState(() =>({modalUpdateOpened : true, updatingUser : usr }))
  }
  closeAddModal(){
    this.setState(() =>({modalAddOpened : false}))
  }
  closeUpdateModal(){
    this.setState(() =>({modalUpdateOpened : false}))
  }
  render() {
    return (

        <div className="content" style= {{backgroundColor: "#F8F8F8", display: "flex", flexDirection:"column", textAlign:"center", justifyContent:"center", flex: "1"}}>
          <ModalAddUser open={this.state.modalAddOpened}  onClose={this.closeAddModal.bind(this)}/>
          <ModalUpdateUser open={this.state.modalUpdateOpened} user={this.state.updatingUser}  onClose={this.closeUpdateModal.bind(this)}/>

            <div style={{ backgroundColor: "#FFFFFF", display:"flex", alignItems:"center", justifyContent:"center", border:"solid 1px", borderRadius:"10px", marginTop: "5px", marginLeft: "5px", marginRight: "5px", minHeight:"120px"}}
                        onClick={this.openAddModal.bind(this)}>
              <a><FaUserPlus  size="4em"/></a>
            </div>
            <input placeholder="Search" onChange={this.setFilter.bind(this)} style={{marginTop: "5px", marginLeft: "5px", marginRight: "5px", lineHeight: "30px", fontSize: "30px", textAlign:"center"}}/>
            {this.drawUsers()}
          </div>

    );
  }
}





export default UserManagement;
