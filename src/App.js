import './App.css';
import {connect} from 'react-redux'
import React, {Component} from 'react'
import Navbar from './components/navbar.js'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import {searchSymbol, covidData,sortAlphabetical, sortCases, sortDeaths, searchNews, getNews, getQuote} from './actions/ApiActions.js' 
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Covid from './components/covid'

import SymbolContainer from './containers/symbolContainer.js'
import CompanyContainer from './containers/profileContainer'
import AllNewsContainer from './containers/allnewsContainer'
import QuoteContainer from './containers/quoteContainer';


class App extends Component{

componentDidMount(){
  this.props.covidData()
  this.props.getNews()
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
    <CompanyContainer results={this.props.result} searchNews={this.props.searchNews}/> 
    </div>} />

    <Route exact path ="/news" render ={() => 
    <div> 
    <AllNewsContainer getNews={this.props.getNews} showNews={this.props.news}/> 
    </div>} />

    <Route exact path ="/quote" render ={() => 
    <div> 
      <QuoteContainer getQuote={this.props.getQuote}/>
    </div>}/>

    </Router>
      
    </div>


  );
}} 

const mapStateToProps = state => {
  return {
    result: state.results, 
    covid: state.covid,
    news: state.news, 
    quote: state.quote
  }
}

export default connect(mapStateToProps,{searchSymbol,covidData,sortAlphabetical, sortCases,sortDeaths, searchNews, getNews, getQuote})(App) 

