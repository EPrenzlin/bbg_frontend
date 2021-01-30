import React, {Component} from 'react' 
import SymbolForm from '../components/symbolForm'
import SymbolComponent from '../components/SymbolComponent'
import { connect } from 'react-redux';
import {searchSymbol} from '../actions/ApiActions.js'


class SymbolContainer extends Component {
    render() {
    return(
      <div> 
          <SymbolForm searchSymbol={this.props.searchSymbol}/>
          <SymbolComponent/>
      </div>
        )
    }
  }

//   get the dispatch to send across the query to our action, which will call the fetch to get the info we want, back to the reducer, which will then render the results in an array in our symbol component

const mapDispatchToState = (state) => {
return{
  state: state.results
}
}

export default connect(mapDispatchToState,{searchSymbol})(SymbolContainer) 

