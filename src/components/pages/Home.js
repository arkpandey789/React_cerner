import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    loadElements();
  }, []);

  const loadElements = async () => {
    const result = await axios.get("http://localhost:3003/elements")
    setArray(result.data.reverse())
  }

  const deleteElement=async id=>{
    await axios.delete("http://localhost:3003/elements/"+id);
    loadElements()
  }

  // Drag from here
  const draggables = document.querySelectorAll('.draggable')
  console.log(draggables)
    const containers = document.querySelectorAll('.dragContainer')

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
          console.log("drag started")
            draggable.classList.add('dragging')
        })

        draggable.addEventListener('dragend', () => {
          console.log("drag ends")
            draggable.classList.remove('dragging')
        })
    })
    containers.forEach(container => {
      container.addEventListener('dragover', e => {
          e.preventDefault()
          const afterElement = getDragAfterElement(container, e.clientY);
          const draggable = document.querySelector('.dragging');
          if (afterElement == null) {
               //container.appendChild(draggable)
              console.log(draggable)
          }
           else {
              // container.insertBefore(draggable, afterElement)
              console.log(draggable)
          }
      })

  })

  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2

        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest
        }
      }, { offset: Number.NEGATIVE_INFINITY }).element
    }
    
    
// drag ends

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
           <thead class="thead-dark">
             <tr>
               <th scope="col">#</th>
               <th scope="col">Type</th>
               <th scope="col">Label</th>
               <th scope="col">Mnemonic</th>
               <th>Action</th>
             </tr>
         </thead>
          <tbody class="dragContainer">
            {
              array.map((element, index) => (
                <tr class="draggable" draggable="true">
                  <th scope="row">{index + 1}</th>
                  <td>{element.ipType}</td>
                  <td>{element.label}</td>
                  <td>{element.mnemonic}</td>
                  <td>
                    <Link class="btn btn-primary mr-2" to={`/elements/${element.id}`}>View</Link>
                    <Link class="btn btn-outline-primary mr-2" to={`/elements/edit/${element.id}`}>Edit</Link>
                    <Link class="btn btn-danger mr-2" onClick={()=>deleteElement(element.id)}>Delete</Link>

                    {/* <Link class="btn btn-primary mr-2" >View</Link>
                    <Link class="btn btn-outline-primary mr-2">Edit</Link>
                    <Link class="btn btn-danger mr-2" onClick={()=>deleteElement(element.id)}>Delete</Link> */}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Home




































































































// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const [users, setUser] = useState([]);

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const result = await axios.get("http://localhost:3003/users");
//     setUser(result.data.reverse());
//   };

//   const deleteUser = async id => {
//     await axios.delete(`http://localhost:3003/users/${id}`);
//     loadUsers();
//   };

//   return (
//     <div className="container">
//       <div className="py-4">
//         <h1>Home Page</h1>
//         <table class="table border shadow">
//           <thead class="thead-dark">
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Name</th>
//               <th scope="col">User Name</th>
//               <th scope="col">Email</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr>
//                 <th scope="row">{index + 1}</th>
//                 <td>{user.name}</td>
//                 <td>{user.username}</td>
//                 <td>{user.email}</td>
//                 <td>
//                   <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
//                     View
//                   </Link>
//                   <Link
//                     class="btn btn-outline-primary mr-2"
//                     to={`/users/edit/${user.id}`}
//                   >
//                     Edit
//                   </Link>
//                   <Link
//                     class="btn btn-danger"
//                     onClick={() => deleteUser(user.id)}
//                   >
//                     Delete
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Home;
