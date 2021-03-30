import React from "react";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
import ToDoItem from "./components/ToDoItem";
// import ContactCard from "./components/ContactCard";
// import Joke from "./components/Joke";
// import Product from "./components/Product"
// import productsData from "./vschoolProducts"
import todosData from "./todosData"

function App() {
    const todoItems = todosData.map(item => <ToDoItem key={item.id} item={item} />)

    return (
        <div>
            {todoItems}
        </div>
    )
}

export default App
