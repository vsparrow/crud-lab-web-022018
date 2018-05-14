
import cuid from 'cuid';
export const cuidFn = cuid;

// export default function manageRestaurants(state, action) {
export default function manageRestaurants(state= {restaurants: []}, action) {
  switch(action.type){
    case 'ADD_RESTAURANT':
    //something
      const id = cuidFn()
      const restaurant = Object.assign({},action.restaurant, {id: id})
      return {restaurants: state.restaurants.concat(restaurant)}
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      // return {restaurants}
      //       return Object.assign({}, state, { reviews });
      return Object.assign({},state,{restaurants})
    default:
      return state;
  }//switch
}//export

// let id = 0;
// export default function manageTodo(state = {
//   todos: []
// }, action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       id++;
//       const todo = Object.assign({}, action.todo, { id: id });
//       return { todos: state.todos.concat(todo) };
//     case 'DELETE_TODO':
//       const todos = state.todos.filter(todo => todo.id !== action.id)
//       return {todos}
//     default:
//       return state;
//   }
// };
