import React, { Component } from 'react'
import axios from 'axios';
import NavBar from './Navbar'
export default class favourites extends Component {
 
   constructor(){
    super();
    this.state={
      movies:[],
      genre:[],
      currGenre:"All Genre",
    };
   }
 
   
  async componentDidMount(){
    console.log("CDM used");
    // let res=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=6c10a4f6614e34d94d7b489786dfcd43&language=en-US&page=1");
    //  console.log(res);
    // let data=await res.JSON();
    
    // data=JSON.parse(data);
    // console.log(data);
    // let data = JSON.parse(localStorage.getItem("movies"));
    let data= await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=6c10a4f6614e34d94d7b489786dfcd43&language=en-US&page=2`
    );
    console.log(data.data);
    
    let genreId = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };
    let allGenre = [];
    data.data.results.map((movieObj) => {
      if (!allGenre.includes(genreId[movieObj.genre_ids[0]])) {
        allGenre.push(genreId[movieObj.genre_ids[0]]);
      }
    });
    
    allGenre.unshift("All Genre");
    console.log(allGenre);

    this.setState({
      movies: [...data.data.results],
      genre: [...allGenre],
    });
   }
 
   
    handleGenre = (e) => {
    let genre = e.target.innerText;
    //movies ko filter 
    this.setState({
      currGenre: genre
    });
    // console.log(genre);
  }


  render() {
    let genreId = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };
    let filteredMovies = [];
    if (this.state.currGenre != "All Genre") {
      filteredMovies = this.state.movies.filter(
        (movieObj) => genreId[movieObj.genre_ids[0]] == this.state.currGenre
      );
    }
    else filteredMovies = this.state.movies;
    return (
      <div className="row">
      <div className="col-3 p-5 ">
        <ul class="list-group">
     {this.state.genre.map((genre)=>{
      return ( this.state.currGenre==genre ? 
        <li class="list-group-item active">{genre}</li>
      :
        <li class="list-group-item" onClick={this.handleGenre}>
                  {genre}
                </li>
      );
     })}

  {/* <li class="list-group-item active" aria-current="true">An active item</li> */}
  {/* <li class="list-group-item active">All Geners</li>
  <li class="list-group-item">Fantasy</li>
  <li class="list-group-item">Action</li>
  <li class="list-group-item">Animation</li> */}
        </ul>
        </div>
       <div className="col p-5 favourite-table">
       <div className="row" >
        <input type="text"  className="col-8" placeholder="Search"></input>
        
        <input type="number" className="col" placeholder="Result per page"></input>
       </div>
        <table class="table">
        <thead>
          <tr>
          
            <th scope="col">Title</th>
            <th scope="col">Gener</th>
            <th scope="col">Popularity</th>
            <th scope="col">Rating</th>
          </tr>
        </thead>
        <tbody>
                 { filteredMovies.map((MovieObj)=>(
                  <tr>
 
                  <td> <img src={`https://image.tmdb.org/t/p/original/${MovieObj.backdrop_path}`} style={{width:'8rem'}}></img>
                  {MovieObj.original_title}</td>
                  <td>{genreId[MovieObj.genre_ids[0]]}</td>
                  <td>{MovieObj.popularity}</td>
                  <td>{MovieObj.vote_average}</td>
                   <td>
                    <button className="btn btn-outline-danger">Delete</button>
                   </td>
                  </tr>
                 )
                 )
                 
                 }
                  
        </tbody>
      </table>
      </div>
      </div>
   
    )
  }
}


