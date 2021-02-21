import React, {Component} from 'react' 
import NewsComponent from '../components/newscomponent'
import Row from 'react-bootstrap/Row'

export default class AllNewsContainer extends Component {
 

    render() {
    return( 
    <div>
        <Row md={3}> 
    {this.props.showNews.map(data => {
        return <NewsComponent data={data}/>
    })}
    </Row>
    </div> 
      )
    }
  }

  // change this into Company News