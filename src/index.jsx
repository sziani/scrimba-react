import React from 'react';
import ReactDOM from 'react-dom';
// import MyInfo from "./components/MyInfo";
import App from "./App";

import '../assets/stylesheets/application.scss';

// From LE WAGON BOILERPLATE
// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

// const root = document.getElementById('root');
// if (root) {
//   ReactDOM.render(<div><Hello name="World" /><p>This is a paragraph</p></div>, root);
// }

// SCRIMBA 5 6 7 LESSONS

// function MyApp () {
//   return (
//     <ul>
//       <li>1</li>
//       <li>2</li>
//       <li>3</li>
//     </ul>
//   );
// }

// ReactDOM.render(<MyApp />,
//   document.getElementById("root"));

// function MyInfo () {
//   return (
//     <div>
//       <h1>Sami Ziani</h1>
//       <p>Student @Le Wagon</p>
//       <h2>My top 3 vacation spots</h2>
//       <ul>
//         <li>Japan 🇯🇵</li>
//         <li>Norway 🇳🇴</li>
//         <li>Colombia 🇨🇴</li>
//       </ul>
//     </div>
//   );
// }

// ReactDOM.render(<MyInfo />,
//   document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));
