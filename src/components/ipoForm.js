import React, {Component} from 'react' 
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class IpoForm extends React.Component {

    state = {
        search: "" 
    }

    handleChange = event => {
        this.setState({
          search: event.target.value
        })
      }

    onSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.search)
        this.setState({
            search:""
        })
    }

    render() {
      return( 
        <div> 
        <form onSubmit={this.onSubmit}>
        <label>
        Search Item:
        <input type="text" name="searchItem" value={this.state.search} onChange={this.handleChange}/>
        </label>
        <Button type="submit">Search</Button>
        </form> 
    </div>
      )
    }
  }
