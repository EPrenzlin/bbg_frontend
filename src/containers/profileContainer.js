import React, {Component} from 'react' 
import ProfileForm from '../components/profileForm'
import Profileresult from '../components/profileResult'
import Container from 'react-bootstrap/Container'


export default class NewsContainer extends Component {

    render() {
    return( 
    <div>
    <ProfileForm searchNews={this.props.searchNews}/>

    <Container> 
    <Profileresult results={this.props.results}/>
    </Container>

    </div> 
      )
    }
  }

