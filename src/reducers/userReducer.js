const userReducer = (state = {
  currentUser: [],
}, action) => {

  switch(action.type) {

    case 'ADD_NEW_USER':
      const { name, email, password, passwordConfirmation} = action.payload
      const user = { name, email, password, passwordConfirmation}
      // console.log(state.currentUser, user)
      return {
        ...state,
        currentUser: [...state.currentUser, user]
      }
    default:
      return state

    }
}

export default userReducer