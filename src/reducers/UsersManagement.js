import { getUsers } from '../DAO/usersDAO'

const usersManagement = (state = {users: getUsers()}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      var users = state.users.concat(action.user)
      return {users : users}
    case 'UPD_USER':
      var users = state.users.map(usr => usr._id != action.user._id ? usr : {...usr, ...action.user} )
      return {users : users }

    default :
      return state
  }
}

export default usersManagement
