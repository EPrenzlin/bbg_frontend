import React, {Component} from 'react' 
import SymbolForm from '../components/symbolForm'
import SymbolResult from '../components/symbolResult'



export default class SymbolContainer extends Component {
    render() {
    return(
      <div> 
      <SymbolForm/>
      <SymbolResult/>  
      </div>

      )
    }
  }



// pass in the data array down to hte Symbol componennt as a prop. 

