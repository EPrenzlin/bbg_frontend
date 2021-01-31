import './App.css';
import SymbolContainer from './containers/symbolContainer.js'
import {connect} from 'react-redux'
import React, {Component} from 'react'

import {searchSymbol} from './actions/ApiActions.js' 

class App extends Component{
  render(){
  return (
    <div className="App">
    <h1> Add in Navbar that goes to different components </h1>
    <SymbolContainer searchSymbol={this.props.searchSymbol} searchResults={this.props.result}/> 
    </div>
  );
}} 

const mapStateToProps = state => {
  return {
    result: state.results
  }
}

export default connect(mapStateToProps,{searchSymbol})(App) 


// Things to add:
// Navlinks for each component
// What the rendered Component will show?

//  Key data points I want to be able to display on the app: 
  
// Symbol Lookup => Type in the isin or the company name, and we get results in an array. 
  
    //  News => type in a query and information in an array comes back to us
    //  News sentiment => basically how many times a company has been mentioned in the past week or so. 
  
    // IPO Calandar => when any IPOs are coming into the forray in the future
  
    // Covid data => type in the query, and we get a result
  
    // Index constituents => What makes up the Nasdaq for example

    // total of 5 components 