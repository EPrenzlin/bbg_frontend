import React, {Component} from 'react' 
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

export default class SymbolResult extends Component {

    render() {
      return( 
    <div> 
<Card style={{ width: '18rem' }}>    
{/* <h1> Description: {this.props.description} </h1><br/> 
<h1> Symbol: {this.props.symbol} </h1><br/>
<h1> Type: {this.props.type} </h1><br/>
<h1> Display: {this.props.displaySymbol} </h1><br/>
<h2> id: {this.props.id} </h2> */}
{console.log(this.props.resultArray[0])}

</Card>
    </div>
      )
    }
  }
