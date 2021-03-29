import React from "react";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import ToDoItem from "./components/ToDoItem";
// import ContactCard from "./components/ContactCard";
import Joke from "./components/Joke";
import jokesData from "./jokesData";

function App() {
  const jokeComponents = jokesData.map((joke) => {
    return <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>
  })

  return (
    <div className="jokes">
      {jokeComponents}
    </div>
  )
}

export default App;
