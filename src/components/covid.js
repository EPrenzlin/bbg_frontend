import React, {Component} from 'react' 
import Card from 'react-bootstrap/Card'

export default class Covid extends Component {
    

    render() {
      return( 
    <div> 
<Card>   
<h2> Covid State:{this.props.data.state}</h2>
<h2> Covid Cases: {this.props.data.case}</h2>
<h2> Covid Deaths: {this.props.data.death} </h2>
</Card>
    </div>
      )
    }
  }