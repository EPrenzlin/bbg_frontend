import React, {Component} from 'react' 
import Card from 'react-bootstrap/Card'

export default class NewsResult extends Component {

    render() {
      return( 
    <div> 
    <Card style={{width:'20'}}> 
      <h1> Country: {this.props.results.country} </h1>
      <h1> Currency: {this.props.results.currency}</h1>
      <h1> IPO date: {this.props.results.ipo}</h1>
      <h1> Country: {this.props.results.country}</h1>
      <h1> Industry: {this.props.results.finnhubIndustry}</h1>
      <h1> Company name: {this.props.results.name}</h1>
      <h1> Company website: {this.props.results.weburl}</h1>
      <h1> Primary Exchange: {this.props.results.exchange}</h1>
      <h1> Total Market Capitalisation: {this.props.results.marketCapitalization}</h1>
      <h1> Company number: {this.props.results.phone}</h1>

    </Card>
    </div>
      )
    }
  }
