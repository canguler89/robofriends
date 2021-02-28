import React, { Component } from "react"
import './App.css';
import CardList from "./CardList"
import SearchBox from './SearchBox'

class App extends Component{
  constructor(){
    super()
    this.state ={
      robots: [],
      searchField: ''
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => this.setState({ robots: users}))
}


  onSearchChange = (e) => {
    this.setState({searchField: e.target.value})
  }


  render(){
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
  
  return (
      <div className="tc">
        <h1>Robot Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
  );
}}

export default App;
