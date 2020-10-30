import React, { Component } from 'react'
import { SearchBox } from './components/SearchBox'

export class App extends Component {
  handleMedSearch = (e) => {
    console.log(e.target.value)
  }
  render() {
    return (
      <div className="App">
        <SearchBox placeHolder="Search for a medicine" handleFuntion={this.handleMedSearch}/>
      </div>
    )
  }
}

export default App
