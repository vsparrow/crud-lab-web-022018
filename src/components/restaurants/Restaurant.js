import React, { Component } from 'react';

class Restaurant extends Component {
  handleDelete = ()=>{
    console.log("delete clicked");
    // this.props.store.dispatch({type: 'DELETE_TODO', id:this.props.id})  }
    this.props.store.dispatch({type: 'DELETE_RESTAURANT', id: this.props.restaurant.id})
  }
  render() {
    // console.log("Restaurant");
    // console.log(this.props);
    return (
      <div>
        
        <h2>{this.props.restaurant.text}</h2>
        <button onClick={this.handleDelete}>delete</button>
      </div>
    );
  }
};

export default Restaurant;
