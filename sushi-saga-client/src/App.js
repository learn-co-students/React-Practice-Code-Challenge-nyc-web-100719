import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    index: 0,
    eatenSushi: [],
    money: 100
  }

  getSushi(){
    fetch(API)
    .then(resp => {return resp.json()})
    .then(data => {this.setState({sushi: data})})
  }

  componentDidMount(){
    this.getSushi()
  }
  
  getSushiGroup = () => {
    let sushi = this.state.sushi
    let index = this.state.index
    return sushi.slice(index, index + 4)
  }

  moreSushi = () => {
    this.setState({index: this.state.index + 4})
  }

  eatSushi = (eatenSushiObj) => {
    let sushi = this.state.sushi
    if (sushi.find(sushiObj => {
      return sushiObj.id === eatenSushiObj.id && !sushiObj.eaten
    }) && this.state.money >= eatenSushiObj.price ) {
      let newSushiArr = sushi.map(sushiObj => {
        if (sushiObj.id === eatenSushiObj.id){
          sushiObj.eaten = true
          return sushiObj
        } else {
          return sushiObj
        }
      })
      this.setState({
        sushi: newSushiArr,
        eatenSushi: [...this.state.eatenSushi, eatenSushiObj],
        money: this.state.money - eatenSushiObj.price
      })
    } else if (this.state.money < eatenSushiObj.price) {
      alert("not enough money!")
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
        sushi={this.getSushiGroup()}
        moreSushi={this.moreSushi}
        eatSushi={this.eatSushi}/>

        <Table 
        eatenSushi={this.state.eatenSushi}
        money={this.state.money}/>
      </div>
    );
  }
}

export default App;