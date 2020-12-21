import React from 'react'
import { connect } from 'react-redux'
import { setName } from './store/Action/Action'
import './App.css'

function App(props) {
   console.log('redux-props==>',props)
  return<div className='d'>
     <div>
     Hello {props.name}
     <br/>
     <button onClick={()=>props.update()}>Set Name</button>
  </div>
  </div>
  }


  const mapStateToProps = (state)=>(
     {
        name : state.name,
        email: 'saad@gmail.com'
     }
  )

  const mapDispatchToProps = (dispatch)=>(
   {
      update : ()=> dispatch(setName())
   }
)

  export default connect(mapStateToProps,mapDispatchToProps)(App);