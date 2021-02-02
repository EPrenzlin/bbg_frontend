import React, {Component} from 'react' 
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

export default class SymbolResult extends Component {

    render() {
      return( 
    <div> 
<Card style={{ width: '18rem' }}>   
{console.log("from single", this.props.resultArray.description)}
</Card>
    </div>
      )
    }
  }
