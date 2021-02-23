import React, {Component} from 'react' 
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'


export default class ProfileForm extends Component {

    state ={
        search:""
    }

    handleChange = event => {
        const value = event.target.value 
        this.setState({
          search: value
        })
      }

    onSubmit = (event) => {
        event.preventDefault()
        const query = this.state.search
        this.props.searchNews(query)
        this.setState({
            search:""
        })
    }

    render() {
    return( 
        <div> 
          <h2> Get company's basic information.</h2>
          <Container> 
        <Form onSubmit={this.onSubmit}>
          
        <Form.Row className="justify-content-md-center">
        <textarea input type="text" name="searchquery" placeholder= "Input Search query(SYMBOL)" value={this.state.search} onChange={this.handleChange}/> 
        <Button type="submit" variant="primary">Search</Button> 
        </Form.Row>
        </Form>
        </Container>
      </div>
      )
    }
  }