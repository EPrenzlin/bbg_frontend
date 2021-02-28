import React, {Component} from 'react' 
import QuoteForm from '../components/quoteForm'
import QuoteResult from '../components/quoteResult'

import Row from 'react-bootstrap/Row'

import Container from 'react-bootstrap/Container'

export default class QuoteContainer extends Component {
    render() {
    return(
      <div>
      <Container>
      <QuoteForm/>
      <QuoteResult/> 
      </Container>

    </div> 
    ) 
  } 
} 
