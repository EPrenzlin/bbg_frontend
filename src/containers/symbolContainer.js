import React, {Component} from 'react' 
import SymbolForm from '../components/symbolForm'
import SymbolResult from '../components/symbolResult'
import Row from 'react-bootstrap/Row'



export default class SymbolContainer extends Component {
    render() {
    return(
      <div> 
      <SymbolForm searchSymbol={this.props.searchSymbol}/>

      {this.props.searchResults.map(result => {
      result.map(obj => console.log(obj)) 
      })}

      </div>

      )
    }
  }


// pass in the data array down to hte Symbol componennt as a prop. 

// I have an [[{object}], [{object}]] repeated... iterate through each of them to access to objs, 
// and pass that down to the SymbolResult. 