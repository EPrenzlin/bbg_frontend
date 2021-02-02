import React, {Component} from 'react' 
import SymbolForm from '../components/symbolForm'
import SymbolResult from '../components/symbolResult'
import Row from 'react-bootstrap/Row'



export default class SymbolContainer extends Component {
    render() {
    return(
      <div> 
      <SymbolForm searchSymbol={this.props.searchSymbol}/>

<Row md={3}> 

      {/* {this.props.searchResults.forEach((result,index) => {
        console.log(`index is ${result.length}`, result[index])  
        return <SymbolResult resultArray={result} />
        })} */}

        {this.props.searchResults.map(result => {
          result.map(object => {
          console.log(object)
          })
        })}

</Row>
      </div>

      )
    }
  }


// pass in the data array down to hte Symbol componennt as a prop. 

