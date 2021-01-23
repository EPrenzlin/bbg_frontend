import React, {Component} from 'react' 
import IpoForm from '../components/ipoForm'
import IpoComponent from '../components/ipoComponent'

export default class IpoContainer extends Component {
    render() {
        return(
      <div> 
          <IpoForm/>
          <IpoComponent/>
      </div>
        )
    }
  }
