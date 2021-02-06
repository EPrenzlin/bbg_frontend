import React, {Component} from 'react' 
import Card from 'react-bootstrap/Card'

export default class SymbolResult extends Component {

    render() {
      return( 
    <div> 
<Card style={{ width: '18rem' }}>   
<h2> Description:</h2>
<h2> Symbol: </h2>
<h2> Type: </h2>
</Card>
    </div>
      )
    }
  }
