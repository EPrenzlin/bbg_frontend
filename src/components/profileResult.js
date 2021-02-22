import React, {Component} from 'react' 
import Card from 'react-bootstrap/Card'

export default class Profileresult extends Component {

    render() {
      return( 
    <div> 
    <Card> 
      <h1> Company name: {this.props.results.name} </h1>
      <h2> Country: {this.props.results.country} </h2>
      <h2> Currency: {this.props.results.currency}</h2>
      <h2> IPO date: {this.props.results.ipo}</h2>
      <h2> Country: {this.props.results.country}</h2>
      <h2> Industry: {this.props.results.finnhubIndustry}</h2>
      <h2> Company website: {this.props.results.weburl}</h2>
      <h2> Primary Exchange: {this.props.results.exchange}</h2>
      <h2> Total Market Capitalisation: {this.props.results.marketCapitalization}</h2>
      <h2> Company number: {this.props.results.phone}</h2>
    </Card>
    </div>
      )
    }
  }
