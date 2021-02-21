import React, {Component} from 'react' 
import NewsComponent from '../components/newscomponent'
import Row from 'react-bootstrap/Row'
import CardColumns from 'react-bootstrap/CardColumns' 

export default class AllNewsContainer extends Component {
 

    render() {
    return( 
    <div>
        <CardColumns>
        {/* <Row md={3}>  */}
    {this.props.showNews.map(data => {
        return <NewsComponent data={data}/>
    })}
    {/* </Row> */}
    </CardColumns>
    </div> 
      )
    }
  }

  // change this into Company News