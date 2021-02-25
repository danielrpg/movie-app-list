import { Component } from 'react'
import './App.css';
import SearchCompoment from './components/SearchComponent'
import { Message } from 'semantic-ui-react'
import { Movie } from './components/Movie'
import HeaderComponent from './components/HeaderComponent'


class App extends Component {

  state = { results: [], hasResults: false, activeItem: 'SearchMovie' }

  _onShowResult = (results) => {
//    console.log(results)
    this.setState({ results: results, hasResults: true })
  }

  _renderResults = () => {
    //console.info(this.state.results.Response == "True")
    return this.state.results.Response === "True"
           ? <Movie searchResults={this.state.results} />
           : <Message><p>There is not results with your search !! </p> </Message>

    //return this.state.results
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent />
         <SearchCompoment onShowResult={this._onShowResult}/>
         { 
           this.state.hasResults
           ? this._renderResults()
           : <Message><p>There is not results </p> </Message>
         }
      </div>
    )
  }
  
}

export default App;
