import React, {Component} from 'react' 
import Card from 'react-bootstrap/Card'

export default class Profileresult extends Component {

    render() {
      return( 
    <div> 
    <Card>
      <Card.Text> 
       Company name: {this.props.results.name} <br/>
       Country: {this.props.results.country}  <br/>
       Currency: {this.props.results.currency}  <br/>
       IPO date: {this.props.results.ipo} <br/>
       Country: {this.props.results.country}  <br/>
       Industry: {this.props.results.finnhubIndustry} <br/> 
       Company website: {this.props.results.weburl} <br/>
       Primary Exchange: {this.props.results.exchange}  <br/>
       Total Market Capitalisation: {this.props.results.marketCapitalization} <br/>
       Company number: {this.props.results.phone} 
    </Card.Text> 
    </Card>
    </div>
      )
    }
  }
