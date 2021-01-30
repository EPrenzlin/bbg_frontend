import React, {Component} from 'react' 
import Card from 'react-bootstrap/Card'


export default class SymbolCard extends Component{

    render() {
      return(
          <div> 
      <h1> This is the Symbolcard component </h1> 
      <Card style={{ width: '18rem' }}>
<Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    </Card.Body>
</Card>
      </div>
      )
    }
  }

//   use map dispatch to state as the holders of the information.