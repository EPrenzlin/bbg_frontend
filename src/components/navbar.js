import React,{Component} from 'react' 
import Nav from 'react-bootstrap/Nav'

export default class NavBar extends Component{
    render(){
        return(
            <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/search">Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/profile">Company Profile</Nav.Link>
            </Nav.Item>

            <Nav.Item> 
              <Nav.Link href="quote"> Stock Quotes </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/covid">Covid-19 Data</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/news">News</Nav.Link>
            </Nav.Item>
          </Nav>
        )
    }
}