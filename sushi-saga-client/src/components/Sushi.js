import React, { Component, Fragment } from 'react'

class Sushi extends Component {
  
  


  render(){
    // console.log(this.props)
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={() => this.props.eat(this.props.sushi)}>
          { this.props.taken ? null : <img src={this.props.image} width="100%" />}
        </div>
        <h4 className="sushi-details">
          {this.props.name} - ${this.props.price}
        </h4>
      </div>
    )
  }
}

export default Sushi