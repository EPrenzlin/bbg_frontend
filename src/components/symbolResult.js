import React, {Component} from 'react' 
import Card from 'react-bootstrap/Card'

export default class SymbolResult extends Component {

    render() {
      return( 
    <div> 
<Card style={{ width: '18rem' }}>   
<h2> Description:</h2>
{console.log("in result",this.props.data)}
</Card>
    </div>
      )
    }
  }
