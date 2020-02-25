const userReducer = (state = {
  currentUser: [],
}, action) => {

  
  switch(action.type) {
    
    case 'ADD_NEW_USER':
      const { name, email, id } = action.payload
      const newUser = { name, email, id }
      // console.log(newUser)
      return {
        ...state,
        currentUser: Object.assign(newUser)
      }

    case 'LOGIN_USER':
      // const { email, password } = action.payload
      const user = action.payload
      // console.log(user)
    return {
      ...state,
      currentUser: Object.assign(user)
    }

    case 'UPDATE_USER_COLOR':
      // console.log(action.payload)
      const colorQuiz = { color: action.payload }
      // const thisUser = state.currentUser
      // debugger
      // console.log(colorQuiz)
      return {
        ...state,
        currentUser: Object.assign(state.currentUser, colorQuiz)
      }

      case 'UPDATE_USER_INFO':
        // const stillThisUser = state.currentUser
        const birthday = { birthday: action.payload.birthday }
        const gender = { gender: action.payload.gender }
        const location = { location: action.payload.location }
        const bio = { bio: action.payload.bio }
        const zodiac = { zodiac: action.payload.zodiac}
        // debugger
        // console.log(birthday, gender, location)
        return {
          ...state,
          currentUser: Object.assign(state.currentUser, birthday, gender, location, zodiac, bio)
        }

      case 'LOGOUT_USER':
        // const loggingOutUser = action.payload
        return {
          currentUser: []
        }
      
    default:
      return state

    }
}

export default userReducer