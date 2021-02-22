import React, {Component} from 'react' 
import ProfileForm from '../components/profileForm'
import ProfileResult from '../components/profileResult'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/esm/Card'
import Container from 'react-bootstrap/Container'


export default class NewsContainer extends Component {

    render() {
    return( 
    <div>
    <ProfileForm searchNews={this.props.searchNews}/>

    <Container> 
    <ProfileResult results={this.props.results}/>
    </Container>
    
    </div> 
      )
    }
  }

