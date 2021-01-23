import './App.css';
import IpoContainer from './containers/ipoContainer'




function App() {
  return (
    <div className="App">
    <h1> Search function bar goes here with download to csv functionality</h1>
    <IpoContainer/>
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