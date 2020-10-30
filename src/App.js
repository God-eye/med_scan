import React, { Component } from 'react'
import { CardsList } from './components/CardsList'
import { SearchBox } from './components/SearchBox'

export class App extends Component {

  state={
    pros:['Pro1', 'Pro2', 'Pro3'],
    cons:['Cons1', 'Cons2', 'Cons3'],
    facts:['Facts1', 'Facts2', 'Facts3'],
  }

  handleMedSearch = (e) => {
    console.log(e.target.value)
  }
  render() {
    return (
      <div className="App">
        <SearchBox placeHolder="Search for a medicine" handleFuntion={this.handleMedSearch}/>
        <br/>
        <CardsList cardContents={{...this.state}} handleMedSearch={this.handleMedSearch} />
      </div>
    )
  }
}

export default App
