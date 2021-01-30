import React, {Component} from 'react' 
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default class SymbolForm extends Component {

    state = {
        search: "" 
    }

    handleChange = event => {
        const value = event.target.value 
        this.setState({
          search: value
        })
      }

    onSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.search)
        this.props.searchSymbol(this.state.search)
        this.setState({
            search:""
        })
    }


    render() {
      return( 
    <div> 
    <Form onSubmit={this.onSubmit}>   
    <textarea input type="text" name="searchquery" placeholder= "Input Search query (ISIN, SYMBOL)" value={this.state.search} onChange={this.handleChange}/> 
    <Button type="submit" variant="primary">Search</Button> 
    </Form>
    </div>
      )
    }
  }
