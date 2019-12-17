import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

    state = {
      sushis: [],
      currIndex: 0,
      eaten: [],
      money: 100
    }

    componentDidMount(){
      fetch(API)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          sushis: [...data]
        });
        }
        )
    }

    more = () =>{
      let newIndex = this.state.currIndex + 4
      this.setState({
        currIndex: newIndex
      })
    }

    displaySushi = () =>{
      return this.state.sushis.slice(this.state.currIndex,this.state.currIndex+4)
       
    }

    eat = (sushi) =>{
      let newMoney = this.state.money - sushi.price
      if(!this.state.eaten.includes(sushi) && newMoney >= 0){
        console.log(sushi)
        this.setState({
          eaten: [...this.state.eaten, sushi],
          money: newMoney
        })
      }
    }


  render() {
    // console.log(this.state.sushis)
    return (
      <div className="app">
        <SushiContainer sushis = {this.displaySushi()} eat = {this.eat} more = {this.more} eaten = {this.state.eaten}/>
        <Table money = {this.state.money} eaten = {this.state.eaten} />
      </div>
    );
  }
}

export default App;