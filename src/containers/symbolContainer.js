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

//   get the dispatch to send across the query to our action, which will call the fetch to get the info we want, back to the reducer, which will then render the results in an array in our symbol component