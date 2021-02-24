import React, {Component} from 'react' 
import Card from 'react-bootstrap/Card'

export default class Covid extends Component {
    

    render() {
      return( 
    <div> 
<Card border="primary" bg="light" > 
<Card.Text> 
Covid State:{this.props.data.state} <br/>
Cases: {this.props.data.case} <br/>
Deaths: {this.props.data.death} <br/>
</Card.Text>  
</Card>
    </div>
      )
    }
  }