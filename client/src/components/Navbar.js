import React from "react"
import Search from "./Search"


function Navbar({ handleSearchChange }) {
    return (
     <div className="navbar">
       <h1>Employee Tracker</h1>
       <Search handleSearchChange={handleSearchChange}/>
     </div>
    );
  }
  
  export default Navbar;
  