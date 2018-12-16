import { connect } from 'react-redux'
import Modal from '../components/Modal'
import { createUser } from '../actions/userManagement'

const mapStateToProps = (state) =>({

})

const mapDispatchToProps = (dispatch) =>({
  submitForm: (user) => dispatch(createUser(user))
})
const ModalAddUserContainer  = connect(mapStateToProps, mapDispatchToProps

)(Modal)


export default ModalAddUserContainer
