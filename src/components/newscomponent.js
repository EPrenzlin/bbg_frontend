import React, {Component} from 'react' 
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image' 

export default class NewsComponent extends Component {


    render() {
    return( 
    <div>
    <Card bg={'dark'} text={'light'} style={{width:'20 rem'}} border={'warning'} >
    <Card.Title>{this.props.data.headline} </Card.Title>
    <Card.Subtitle className="mb-4 text-muted">{this.props.data.category.toUpperCase()} </Card.Subtitle>
    <Image src={this.props.data.image} rounded width="50" height="50"/>
    {/* <h3> {this.props.data.source} </h3> */}
    <Card.Text> {this.props.data.summary} </Card.Text> <br/> 
    <Card.Link href={this.props.data.url}>Link to Article</Card.Link>
    </Card>
    </div> 
      )
    }
  }

  // change this into Company News