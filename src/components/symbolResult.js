import React, {Component} from 'react' 
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

export default class SymbolResult extends Component {

    render() {
      return( 
    <div> 
<Card style={{ width: '18rem' }}>    
<h1> Description: {this.props.description} </h1>
    <h1> Hello </h1>
    {console.log("in Symbol result", this.props)}
</Card>
    </div>
      )
    }
  }
