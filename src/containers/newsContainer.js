import React, {Component} from 'react' 
import NewsForm from '../components/newsSentimentForm'
import NewsResult from '../components/newsSentimentResult'

export default class NewsContainer extends Component {

    render() {
    return( 
    <div>
    <NewsForm searchNews={this.props.searchNews}/>
    <NewsResult results={this.props.results}/>
    </div> 
      )
    }
  }

  // change this into Company News