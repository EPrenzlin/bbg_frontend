import React, {Component} from 'react' 
import Card from 'react-bootstrap/Card'

export default class NewsComponent extends Component {


    render() {
    return( 
    <div>
    <Card bg={'dark'} text={'light'} style={{width:'20 rem'}} border={'warning'}>
    <Card.Title>{this.props.data.headline} </Card.Title>
    <Card.Subtitle className="mb-4 text-muted">{this.props.data.category.toUpperCase()} </Card.Subtitle>
    <h3> {this.props.data.source} </h3>
    <text> {this.props.data.summary} </text>
    <Card.Link href={this.props.data.url}>Link to Article</Card.Link>
    </Card>
    </div> 
      )
    }
  }

  // change this into Company News