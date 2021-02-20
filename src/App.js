import './App.css';
import {connect} from 'react-redux'
import React, {Component} from 'react'
import Navbar from './components/navbar.js'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import {searchSymbol, covidData,sortAlphabetical, sortCases, sortDeaths, searchNews, getNews} from './actions/ApiActions.js' 
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Covid from './components/covid'

import SymbolContainer from './containers/symbolContainer.js'
import CompanyContainer from './containers/newsContainer'
import AllNewsContainer from './containers/allnewsContainer'


class App extends Component{

componentDidMount(){
  this.props.covidData()
}
  render(){
  return (
      <div className="App">
      <Router> 
        <Navbar/>
      <Route exact path="/search" render={() => 
      <div> 
    <SymbolContainer searchSymbol={this.props.searchSymbol} searchResults={this.props.result}/> 
    </div>
    }/>

    <Route exact path="/covid" render={() => 
    <div> 
    <Button variant="primary" onClick={this.props.sortAlphabetical}>Sort Alphabetically</Button>{' '}
    <Button variant="primary" onClick={this.props.sortCases}>Sort by Case Number</Button>{' '}
    <Button variant="primary" onClick={this.props.sortDeaths}>Sort by Death Number</Button>{' '}

    <Row sm={3}> 
    {this.props.covid.map(obj =>{
      return <Covid data ={obj}/>
    })}
    </Row>
    </div>
    }/>

    <Route exact path ="/profile" render ={() => 
    <div> 
    <CompanyContainer results={this.props.news} searchNews={this.props.searchNews}/> 
    </div>} />

    <Route exact path ="/news" render ={() => 
    <div> 
    <AllNewsContainer getNews={this.props.getNews} showNews={this.props.news}/> 
    </div>} />

    </Router>
      
    </div>


  );
}} 

const mapStateToProps = state => {
  return {
    result: state.results, 
    covid: state.covid,
    news: state.news
  }
}

export default connect(mapStateToProps,{searchSymbol,covidData,sortAlphabetical, sortCases,sortDeaths, searchNews, getNews})(App) 



//  Key data points I want to be able to display on the app: 
  
// Symbol Lookup => Type in the isin or the company name, and we get results in an array. 
  
    //  News sentiment => basically how many times a company has been mentioned in the past week or so. 
  
    // IPO Calandar => when any IPOs are coming into the forray in the future
    
    // total of 5 components 