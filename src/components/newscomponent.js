import React, {Component} from 'react' 

export default class NewsComponent extends Component {


componentDidMount(){
    this.props.getNews()
}

    render() {
    return( 
    <div>
    <h1> Hello from News </h1>
    </div> 
      )
    }
  }

  // change this into Company News