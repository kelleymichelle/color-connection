const userReducer = (state = {
  currentUser: [],
}, action) => {

  
  switch(action.type) {
    
    case 'ADD_NEW_USER':
      const { name, email, id } = action.payload
      const newUser = { name, email, id }
      console.log(newUser)
      return {
        ...state,
        currentUser: [...state.currentUser, newUser]
      }

    case 'LOGIN_USER':
      // const { email, password } = action.payload
      const user = action.payload
      console.log(user)
    return {
      ...state,
      currentUser: [...state.currentUser, user]
    }

    case 'UPDATE_USER_COLOR':
      console.log(action.payload)
      const colorQuiz = action.payload
      console.log(colorQuiz)
      return {
        ...state,
        currentUser: [...state.currentUser, colorQuiz]
      }
      
    default:
      return state

    }
}

export default userReducer