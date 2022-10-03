import React, { Component } from 'react'
import axios from 'axios';
export default class 
extends Component {
   constructor(){
    
    super();
    this.state={
      hover:"",
      movies:[],
       currpage:1,
       fav:[],
    };
    this.favouriteMovies=[];
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
  // let res=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=6c10a4f6614e34d94d7b489786dfcd43&language=en-US&page=1");
  // let data=await res.json();

  let data=await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=6c10a4f6614e34d94d7b489786dfcd43&language=en-US&page=1`
  );
  console.log(data.data);
  this.setState({
    movies:[...data.data.results]
  })
  
 }

  async getUpdate(){
    console.log("getUpdatedMovies is called");
    let data=await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=6c10a4f6614e34d94d7b489786dfcd43&language=en-US&page=${this.state.currpage}`
    );
    console.log(data.data);
    this.setState({
      movies:[...data.data.results]
    })
 
 }

 handleNextPage=()=>{
  
   this.setState({currpage: this.state.currpage+1 }, this.getUpdate)
 }
 
 handlePreviousPage=()=>{
    if(this.state.currpage>1)
   this.setState({currpage: this.state.currpage-1} , this.getUpdate)
  
 }

 componentDidUpdate(){
 console.log("CDU used");

 }
 componentWillUnmount(){
 console.log("CWU usedReact");
 }
  
  handleFavourites=(movieObj)=>{
    if(this.state.fav.includes(movieObj.id)){
      // remove
      this.favouriteMovies=this.favouriteMovies.filter(movie=>movie.id!=movieObj.id)
    }
    else{
      //add
      this.favouriteMovies.push(movieObj);
    }
    let tempData=this.favouriteMovies.map(movieObj=>movieObj.id);
    this.setState({
      fav:[...tempData]
    })
  }


  render() {
    // let AllMovies=movies.results;
    
    console.log("qwerty", this.favouriteMovies);
    return (
      <>
      {this.state.movies.length==0?
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
            this.state.movies.map((movieobj) => {
                return( 
                    <div className="card movie-card"
                    onMouseEnter={()=>this.handleEnter(movieobj.id)}
                    onMouseLeave={this.handleLeave} 
                     >
                    <img src={`https://image.tmdb.org/t/p/original/${movieobj.backdrop_path}`} class="card-img-top movie-img" alt="..." />
                    
                      <h5 class="card-title movie-title">
                        {movieobj.original_title}
                        </h5>
                      {/* <p class="card-text movie-text">{movie.overview}</p> */}
                      <div className='button-wrapper'>
                     { this.state.hover == movieobj.id && (
                     < a href="#" className="btn btn-primary movie-button" onClick={this.handleFavourites(movieobj)}>
                     Add to Favourites
                     </a>
                      )}
                     </div>
                    
                  </div>

                )

             })
        }
      
   
  </div>
  
  <nav aria-label="Page navigation example" className="pagination">
              <ul className="pagination">
                <li className="page-item" onClick={this.handlePreviousPage}>
                  <a className="page-link">Previous</a>
                </li>
                <li className="page-item">
                  <a className="page-link">{this.state.currpage}</a>
                </li>
                <li className="page-item" onClick={this.handleNextPage}>
                  <a className="page-link">Next</a>
                </li>
              </ul>
            </nav>
  </div>
  )}

  </> 
      )
  }
}
