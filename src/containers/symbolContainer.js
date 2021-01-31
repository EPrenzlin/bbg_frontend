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
      {this.props.searchResults.map(result => {
        return <SymbolResult description={result.description} symbol={result.description} type={result.type} displaySymbol={result.displaySymbol} />
      })}
</Row>
      </div>

      )
    }
  }


// pass in the data array down to hte Symbol componennt as a prop. 

