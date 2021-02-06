import React,{Component} from 'react' 
import Nav from 'react-bootstrap/Nav'

export default class NavBar extends Component{
    render(){
        return(
            <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/new">News Sentiment</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/search">Covid019</Nav.Link>
            </Nav.Item>
          </Nav>
        )
    }
}