import React, {Component} from 'react' 
import Button from 'react-bootstrap/Button'

export default class SymbolForm extends React.Component {

    state = {
        symbol:"" 
    }

    handleChangeFrom = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    onSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.setState({
            symbol:"", 
        })
    }


    render() {
      return( 
    <div> 
        <h1> 
        SymbolForm
        </h1>
    </div>
      )
    }
  }
