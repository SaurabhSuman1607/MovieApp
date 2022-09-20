  import React, { Component } from 'react'
  
  export default class Navbar extends Component {
    render() {
      return (
        <div style={{display:"flex",justifyContent:"center" ,alignItems:"center", padding:"1rem"}}>
        <h1> Movies app</h1>
         <h2 style={{marginLeft:"2rem"}}>Favourites </h2>
        </div>
        )
    }
  }
  
