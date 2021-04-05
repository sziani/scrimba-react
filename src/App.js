import React from "react";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
import ToDoItem from "./components/ToDoItem";
// import ContactCard from "./components/ContactCard";
// import Joke from "./components/Joke";
// import Product from "./components/Product"
// import productsData from "./vschoolProducts"
import todosData from "./todosdata"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
        return {
          todos: updatedTodos
        }
    })
  }

  render() {
    const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return (
      <div>
        {todoItems}
      </div>
    )
  }
}

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//   }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.handleClick}>Change!</button>
//             </div>
//         )
//     }
// }


export default App
