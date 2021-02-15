import React, {Component} from 'react' 
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default class NewsForm extends Component {

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
            <h2> Get company's news sentiment and statistics. This is only available for US companies.</h2>
        <Form onSubmit={this.onSubmit}>   
        <textarea input type="text" name="searchquery" placeholder= "Input Search query(SYMBOL)" value={this.state.search} onChange={this.handleChange}/> 
        <Button type="submit" variant="primary">Search</Button> 
        </Form>
        </div>
      )
    }
  }