import React, {Component} from 'react' 
import Card from 'react-bootstrap/Card'

export default class Covid extends Component {
    

    render() {
      return( 
    <div> 
<Card border="primary" bg="light" >   
<h2> Covid State:{this.props.data.state}</h2>
<h2> Cases: {this.props.data.case}</h2>
<h2> Deaths: {this.props.data.death} </h2>
</Card>
    </div>
      )
    }
  }