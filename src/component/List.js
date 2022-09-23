import React, { Component } from 'react'
import {movies} from './getMovies'
export default class 
extends Component {
   constructor(){
    
    super();
    this.state={
      hover:"",
    };
   }

  
  handleEnter=(id)=> {
    this.setState({
     hover:id,
    });

   }
   
   handleLeave=() => {
     this.setState({
       hover:"",
     })
   }  

 async componentDidMount(){
  console.log("CDM used");
  let res=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=6c10a4f6614e34d94d7b489786dfcd43&language=en-US&page=1");
  let data=await res.json();
  console.log(data);
 }
 componentDidUpdate(){
 console.log("CDU used");

 }
 componentWillUnmount(){
 console.log("CWU usedReact");

 }



  render() {
    let AllMovies=movies.results;
    return (
      <>
      {AllMovies.length==0?
      (
<div class="spinner-border text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>):
      
      (<div>
        <h3 className='trending'>
            Trending
        </h3>
      <div className='movies-list'>
        {
             AllMovies.map((movieobj) => {
                return( 
                    <div className="card movie-card"
                    onMouseEnter={()=>this.handleEnter(movieobj.id)}
                    onMouseLeave={this.handleLeave} 
                     >
                    <img src={`https://image.tmdb.org/t/p/original/${movieobj.backdrop_path}`} class="card-img-top movie-img" alt="..." />
                    
                      <h5 class="card-title movie-title">{movieobj.original_title}</h5>
                      {/* <p class="card-text movie-text">{movie.overview}</p> */}
                      <div className='button-wrapper'>
                     { this.state.hover == movieobj.id && (
                     < a href="#" className="btn btn-primary movie-button">
                     Add to Favourites
                     </a>
                      )}
                     </div>
                    
                  </div>

                )

             })
        }
      
   </div>
  </div>
  
  //   <nav aria-label="Page navigation example">
  //   <ul class="pagination">
  //     <li class="page-item"><a class="page-link" href="#">Previous</a></li>
  //     <li class="page-item"><a class="page-link" href="#">1</a></li>
  //     <li class="page-item"><a class="page-link" href="#">2</a></li>
  //     <li class="page-item"><a class="page-link" href="#">3</a></li>
  //     <li class="page-item"><a class="page-link" href="#">Next</a></li>
  //   </ul>
  // </nav>
  
  )}

  </> 
      )
  }
}
