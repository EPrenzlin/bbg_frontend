import React, {Component} from 'react' 
import QuoteForm from '../components/quoteForm'
import QuoteResult from '../components/quoteResult'
import Container from 'react-bootstrap/Container'

export default class QuoteContainer extends Component {
    render() {
    return(
      <div>
      <h1> Get latest Stock Prices </h1>
      <QuoteForm getQuote={this.props.getQuote}/>
      
      <Container> 
      <QuoteResult results={this.props.quoteResult}/>
      </Container>
      
    </div> 
    ) 
  } 
} 
