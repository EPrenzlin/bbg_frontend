import React, {Component} from 'react' 
import Card from 'react-bootstrap/Card'

export default class NewsResult extends Component {

    render() {
      return( 
    <div> 
    <Card> 
      <h1> {this.props.results.country}</h1>
      <h1> {this.props.results.currency}</h1>
      <h1> {this.props.results.ipo}</h1>
      <h1> {this.props.results.country}</h1>
      <h1> {this.props.results.finnhubIndustry}</h1>
      <h1> {this.props.results.name}</h1>
      <h1> {this.props.results.weburl}</h1>
      <h1> {this.props.results.exchange}</h1>
      <h1> {this.props.results.marketCapitalization}</h1>
      <h1> {this.props.results.phone}</h1>
    </Card>
    </div>
      )
    }
  }
