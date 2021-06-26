import "../node_modules/bootstrap/dist/css/bootstrap.css"
import React from 'react'
import Navbar from './components/layout/Navbar'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AddCheckBox from "./components/inputs/AddCheckBox"
import EditElement from "./components/inputs/EditElement"
import Elements from "./components/inputs/View"
import AddRadioButton from "./components/inputs/AddRadioButon"

export default function App() {
  return (
    
      <Router>
      <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/elements/checkbox' component={AddCheckBox}/>
        <Route exact path='/elements/radiobutton' component={AddRadioButton}/>
        <Route exact path='/elements/edit/:id' component={EditElement}/>
        <Route exact path='/elements/:id' component={Elements}/>
      </Switch>
      </div>
      </Router>
   
  );
}












































































































// import React from "react";
// import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import Contact from "./components/pages/Contact";
// import Navbar from "./components/layout/Navbar";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   withRouter
// } from "react-router-dom";
// import NotFound from "./components/pages/NotFound";
// import AddUser from "./components/users/AddUser";
// import EditUser from "./components/users/EditUser";
// import User from "./components/users/User";

// function App(props) {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />

//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/contact" component={Contact} />
//           <Route exact path="/users/add" component={AddUser} />
//           <Route exact path="/users/edit/:id" component={EditUser} />
//           <Route exact path="/users/:id" component={User} />
//           <Route component={NotFound} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
