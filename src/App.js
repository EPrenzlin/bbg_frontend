import './App.css';
import SymbolContainer from './containers/symbolContainer.js'


// import {  } from './actions/exemptionActions'
// need to import the various actions we have within our actions/actions JS ( this is where we can use the open library JS to make our calls.)

function App() {
  return (
    <div className="App">
    <h1> Add in Navbar that goes to different components </h1>
    <SymbolContainer/>
    </div>
  );
}

export default App;


// Things to add:
// Navlinks for each component
// What the rendered Component will show?

//  Key data points I want to be able to display on the app: 
  
// Symbol Lookup => Type in the isin or the company name, and we get results in an array. 
  
    //  News => type in a query and information in an array comes back to us
    // News sentiment => basically how many times a company has been mentioned in the past week or so. 
  
    // IPO Calandar => when any IPOs are coming into the forray in the future
  
    // Covid data => type in the query, and we get a result
  
    // Index constituents => What makes up the Nasdaq for example

    // total of 5 components 