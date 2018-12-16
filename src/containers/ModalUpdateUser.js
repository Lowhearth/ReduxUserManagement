import { connect } from 'react-redux';
import Modal from '../components/Modal'
import { updateUser } from '../actions/userManagement'



var mapStateToProps = (store) => ({

})

var mapDispatchToProps = (dispatch) => ({
  submitForm : (user) => dispatch(updateUser(user))
})


var ModalUpdateUser = connect(mapStateToProps, mapDispatchToProps)(Modal)

export default ModalUpdateUser;
