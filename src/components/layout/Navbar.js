import React from "react";
import { Link, NavLink } from "react-router-dom";
import NativeSelect from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import { Card, Button } from "@material-ui/core";
import { Divider, FormControl, InputLabel, makeStyles } from '@material-ui/core';
const Navbar = () => {

  const [value, setValue] = React.useState("");
  function onValueChange(value) {
    setValue(value)
  }
  function submit(event) {
    var path = event.target.value

  }

  const useStyles = makeStyles(theme => ({
    formControl: {
      minWidth: 200
    },
    cardmargin: {
      margin: '30px'
    }
  }))

  const classes = useStyles();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Elements
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
               </NavLink>
            </li>
            <li className="nav-item dropdown">
              {/* <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div className="dropdown-menu" aria-labelledby="navbarDropdown"> */}
             
              {/* <InputLabel id="demo-controlled-open-select-label" >SelectItem</InputLabel> */}
                <NativeSelect onChange={(e) => onValueChange(e.target.value)} >


                  <MenuItem value="input">TextBox</MenuItem>
                  <MenuItem value="elements/checkbox">CheckBox</MenuItem>
                  <MenuItem value="elements/radiobutton">RadioButton</MenuItem>
                
                </NativeSelect>
                <Link to={value}>
                  <Button onClick={submit}>Add</Button>
                </Link>
               {/* </div>
               </NavLink> */}
              
            </li>
          </ul>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;


















// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//       <div className="container">
//         <Link className="navbar-brand" href="/">
//           Elements
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/">
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item dropdown">
//               <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 Input
//               </NavLink>
//               <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <NavLink className="dropdown-item" exact to="/about" to="/about">About</NavLink>
//                 <NavLink className="dropdown-item" exact to="/contact" to="/contact">Contact</NavLink>
//               </div>
//             </li>
//           </ul>
//         </div>

//         <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;