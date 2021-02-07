import React, {Component} from 'react' 
import SymbolForm from '../components/symbolForm'
import SymbolResult from '../components/symbolResult'
import Row from 'react-bootstrap/Row'
import { Router } from 'react-router-dom'



export default class SymbolContainer extends Component {
    render() {
    return(
      <div>
      <SymbolForm searchSymbol={this.props.searchSymbol}/>
    
      <Row md={3}> 
      {this.props.searchResults.map(result => {
        return <SymbolResult data ={result}/>
      })
      }
      </Row>

    </div> 
    ) 
  } 
} 
