import React, {Component} from 'react' 
import Card from 'react-bootstrap/Card'

export default class NewsComponent extends Component {


    render() {
    return( 
    <div>
    <Card> 
    <h1> {this.props.data.category} </h1>
    <h1> {this.props.data.headline} </h1>
    <h1> {this.props.data.source} </h1>
    <h1> {this.props.data.summary} </h1>
    <h1> {this.props.data.url} </h1>
    </Card>
    </div> 
      )
    }
  }

  // change this into Company News