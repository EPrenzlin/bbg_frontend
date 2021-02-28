import React, {Component} from 'react' 
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export default class QuoteResult extends Component {

    render() {
      return( 
    <div> 
    <Card>
    <Card.Text> 
    Previous Close: {this.props.results.pc} <br/> 
    Opening Price: {this.props.results.o} <br/>  
    High Price: {this.props.results.h}  <br/> 
    Low Price: {this.props.results.l} <br/> 
    Current Price: {this.props.results.c} <br/>
    </Card.Text>
    </Card>
    </div>
      )
    }
  }