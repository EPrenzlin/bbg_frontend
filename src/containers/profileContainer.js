import React, {Component} from 'react' 
import ProfileForm from '../components/profileForm'
import ProfileResult from '../components/profileResult'

export default class NewsContainer extends Component {

    render() {
    return( 
    <div>
    <ProfileForm searchNews={this.props.searchNews}/>
    <ProfileResult results={this.props.results}/>
    </div> 
      )
    }
  }

