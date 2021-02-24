import React, {Component} from 'react' 
import Card from 'react-bootstrap/Card'

export default class SymbolResult extends Component {

    render() {
      return( 
    <div> 
<Card border="primary">   
<Card.Text> 
Description:{this.props.data.description} <br/>
Symbol: {this.props.data.symbol}<br/>
Type: {this.props.data.type}<br/>
</Card.Text>
</Card>
    </div>
      )
    }
  }
