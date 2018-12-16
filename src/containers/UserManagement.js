import { connect } from 'react-redux'
import UserManagement from '../pages/UserManagement'

var mapStateToProps = (store) => ({
    users: store.usersManagement.users
})

var mapDispatchToProps = (dispatch) => ({
  selectUser : (user) => dispatch()
})
var UserManagementContainer = connect(mapStateToProps, mapDispatchToProps)(UserManagement)


export default UserManagementContainer;
