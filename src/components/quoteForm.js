import React, {Component} from 'react' 

export default class QuoteForm extends Component{
    state ={
        search:""
    }
    
    handleChange = event => {
        const value = event.target.value
        this.setState({
            search:value
        })
    }

    onSubmit = event => {
        event.preventDefault()
        const query = this.state.search
        this.setState({
            search:""
        })
    }

    render(){
        return(
            <div> 
                <h1> Hello from QuoteForm</h1>
            </div>
        )
    }
}