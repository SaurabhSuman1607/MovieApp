import React, { Component } from 'react'
import {movies} from './getMovies'
export default class 
extends Component {
  render() {
    let AllMovies=movies.results;
    return (
      <div>
        <h3 className='trending'>
            Trending
        </h3>
      <div className='movies-list'>
        {
             AllMovies.map((movieobj) => {
                return( 
                    <div className="card movie-card" >
                    <img src={`https://image.tmdb.org/t/p/original/${movieobj.backdrop_path}`} class="card-img-top movie-img" alt="..." />
                    
                      <h5 class="card-title movie-title">{movieobj.original_title}</h5>
                      {/* <p class="card-text movie-text">{movie.overview}</p> */}
                      <div className='button-wrapper'>
                     <a href="#" class="btn btn-primary movie-button">
                     Add to Favourites
                     </a>
                     </div>
                    
                  </div>

                )

             })
        }
      
   </div>
  </div>
    )
  }
}
