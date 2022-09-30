  import React, { Component } from 'react'
  import {Link} from 'react-router-dom'
  export default class Navbar extends Component {
    render() {
      return (
        <div style={{display:"flex",justifyContent:"center" , color:"blue",alignItems:"center", padding:"1rem"}}>
        <Link to="/">
        <h1> Movies app</h1>
         </Link>
         <Link to="Fav">
         <h2 style={{marginLeft:"2rem"}}>Favourites </h2>
         </Link>
        </div>
        )
    }
  }
  
