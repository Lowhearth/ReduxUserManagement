import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import { Button, Checkbox, Form } from 'semantic-ui-react'


class ModalForm extends Component {
  state = {
            _id:"",
            name: "",
            email: "",
            phone: "",
            emailError:false,
            nameError: false }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value, [e.target.name +"Error"] :false })
  handleSubmit = () => {
    const { name, email, phone, _id } = this.state
    if(this.verifyData(name, email)){
      this.props.submitForm({name, email, phone, _id});
      this.resetForm()
    }
  }
  verifyData(name, email){

    var check = true
    if(name == ""){
      this.setState({nameError:true})
      check=false
    }else{

      this.setState({nameError:false})
    }
    if(email == ""){
      this.setState({emailError:true})
      check=false
    }else{
      this.setState({emailError:false})
    }
    return check

  }
  resetForm(){
    this.setState({name: "",
              email: "",
              phone: "",
              emailError:false,
              nameError: false })
    this.props.onClose()
  }
  componentWillReceiveProps(nextProps){
    if(!!nextProps.user){
      var {user} = nextProps
      this.setState({_id :user._id,
                     name: user.name,
                     email: user.email,
                     phone: user.phone})
    }


  }

  render(){
    const { name, email, phone } = this.state

    return(
    <Modal open={this.props.open} onClose={this.props.onClose}>
      <div style={{width : "500px"}}>
        <Form>
          <Form.Field error ={this.state.nameError} required>
            <label>Name</label>
            <input name="name" placeholder='Name' value={name} onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field error ={this.state.emailError} required>
            <label>Email</label>
            <input name="email" placeholder='Email' defaultValue={email} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Phone</label>
            <input name="phone" placeholder='Phone'  defaultValue={ phone} onChange={this.handleChange}/>
          </Form.Field>
          <Button onClick={this.resetForm.bind(this)}  type='submit'>Cancel</Button>
          <Button type='submit' onClick={this.handleSubmit} style={{float:"right"}}>Submit</Button>

        </Form>
      </div>
    </Modal>
  )}

}
export default ModalForm
