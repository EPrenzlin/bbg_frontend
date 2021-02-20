import React, {Component} from 'react' 
import NewsComponent from '../components/newscomponent'

export default class AllNewsContainer extends Component {
 
    componentDidMount(){
        this.props.getNews()
    }

    render() {
    return( 
    <div>
    <NewsComponent getNews={this.props.getNews} showNews={this.props.news}/> 
    </div> 
      )
    }
  }

  // change this into Company News