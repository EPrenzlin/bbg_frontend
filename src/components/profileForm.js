import React, {Component} from 'react' 
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

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
        <Form onSubmit={this.onSubmit}>   
        <textarea input type="text" name="searchquery" placeholder= "Input Search query(SYMBOL)" value={this.state.search} onChange={this.handleChange}/> 
        <Button type="submit" variant="primary">Search</Button> 
        </Form>
        </div>
      )
    }
  }