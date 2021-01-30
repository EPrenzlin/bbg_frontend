import React, {Component} from 'react' 
import SingleSymbol from './symbolcard'

export default class SymbolComponent extends Component{
    render() {
      return(
      <SingleSymbol/>
      )
    }
  }

  // given an array of data, the component will iterate through each element, and display each within a card