import React, {Component} from 'react' 
import Card from 'react-bootstrap/Card'

export default class SymbolResult extends Component {

    render() {
      return( 
    <div> 
<Card style={{ width: '18rem' }}>   
<h2> Description:{this.props.data.description}</h2>
<h2> Symbol: {this.props.data.symbol}</h2>
<h2> Type: {this.props.data.type}</h2>
</Card>
    </div>
      )
    }
  }
