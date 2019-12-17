import React, { Component, Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
class SushiContainer extends Component{
  

  render(){
    // console.log(this.props.sushis)
    console.log(this.props)
    return (
      <Fragment>
        <div className="belt">
          {
            /* 
              Render Sushi components here!
            */
           this.props.sushis.map(sushi => {
             console.log(sushi)
             return <Sushi name = {sushi.name} 
                          price = {sushi.price} 
                          image = {sushi.img_url} 
                          eat = {this.props.eat}
                          sushi = {sushi}
                          taken = {this.props.eaten.includes(sushi)}/>
           })
           
          }
          <MoreButton more = {this.props.more}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer