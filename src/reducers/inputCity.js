import { inputsCity } from '../actions'

const visibilityFilter = (state = inputsCity.INPUT, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.yesorno
    default:
      return state
  }
}

export default visibilityFilter
