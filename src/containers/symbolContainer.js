import React, {Component} from 'react' 
import SymbolForm from '../components/symbolForm'
import SymbolComponent from '../components/SymbolComponent'

export default class SymbolContainer extends Component {
    render() {
        return(
      <div> 
          <SymbolForm/>
          <SymbolComponent/>
      </div>
        )
    }
  }