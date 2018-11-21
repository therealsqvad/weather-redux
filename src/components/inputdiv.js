import React from 'react'
import PropTypes from 'prop-types'
// import Todo from './Todo'

const City = ({ onclick, completed=true, text='aa' }) => (
    <div><span
    style={{visibility: !completed? 'visible' : 'hidden'}}
    >
      {text}
    </span>
    <input type="textbox" style={{visibility: completed? 'visible' : 'hidden'}} />
    <input type="button" value="OK" onClick={onclick}/>
    </div>
  )

  export default City