import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {text: ""}
  handleChange = (e)=>{
    this.setState({text: e.target.value})
      // ,()=>{console.log(this.state)})
    }
  handleClick = (e)=>{
    e.preventDefault()
    //something here
    this.props.store.dispatch({type: 'ADD_RESTAURANT', restaurant: this.state})
    this.setState({text: ''})
    // ,()=>{console.log("state should be clear")
    // })
  }
  render() {
    // console.log(this.props.store);  //dispatch //getState
    return (
      <div>
        Restaurant Input
        <form>
        Input: <input type="text" value={this.state.text} onChange={this.handleChange}/>
        <input type="submit" onClick={this.handleClick}/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
// You'll first need to create a RestaurantInput component that allows a user to create new restaurants.
