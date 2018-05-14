import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    // console.log("Restaurants js");
    console.log(this.props.store.getState());
    const restaurants=this.props.store.getState().restaurants.map(restaurant=><Restaurant key={restaurant.id} restaurant={restaurant} store={this.props.store}/>)
    return(
      <ul>
        Restaurants Component
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
// . You will then need a Restaurants component that displays a list of restaurants,
//   and a Restaurant component which is responsible for each restaurant.
//    Users should also be able to delete restaurants,
//    and to implement that you will need to give each restaurant an id.
