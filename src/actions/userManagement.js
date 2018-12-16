

export function createUser(user){

  return{
      type: "ADD_USER",
      user: {
      ...user,
      _id: guid(),
      "role" : "User",
      "picture": "http://placehold.it/32x32"
      }
  }
}

export function updateUser(user){
  return{
    type: "UPD_USER",
    user: user
  }

}



function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
