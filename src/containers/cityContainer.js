import { connect } from 'react-redux'
import { inputsCity } from '../actions'
import City from '../components/inputdiv'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (yesorno) => {
  switch (yesorno) {
    case VisibilityFilters.INPUT:
      return true
    case VisibilityFilters.OUTPUT:
      return false
    default:
      throw new Error('Unknown filter: ' + yesorno)
  }
}

const mapStateToProps = state => ({
    completed: getVisibleTodos(state.yesorno)
  })
  
  const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(inputsCity())
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(City)