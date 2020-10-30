import React, { Component } from 'react'
import { CardsList } from './components/CardsList'
import { SearchBox } from './components/SearchBox'
import logo from './Assets/MedScan.png'
import NavBar from './components/NavBar'
import { FileUploader } from './components/FileUploader'
// import { ReactComponent as Logo } from './Assets/MED.svg'

export class App extends Component {

  state={
    pros:['Pro1', 'Pro2', 'Pro3','Pro1', 'Pro2', 'Pro3', 'Pro1', 'Pro2', 'Pro3','Pro1', 'Pro2', 'Pro3', ],
    cons:['Cons1', 'Cons2', 'Cons3'],
    facts:['Facts1', 'Facts2', 'Facts3'],
  }

  handleMedSearch = (e) => {
    console.log(e.target.value)
  }
  render() {
    return (
      <div className="App">
        <NavBar/>
        <img src={logo} className="medLogo" alt="MedScan" width="15%"/>
        <FileUploader/>
        {/* <Logo/> */}
        <SearchBox placeHolder="Search for a medicine" handleFuntion={this.handleMedSearch}/>
        <CardsList cardContents={{...this.state}} handleMedSearch={this.handleMedSearch} />
      </div>
    )
  }
}

export default App
