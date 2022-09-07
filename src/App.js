import axios from 'axios'
import React, { useState } from 'react'

function App() {
  const [text, setText] = useState("")

  const [movie, setMovie] = useState([])

  const changeText = (event) => {
    setText(event.target.value)
    //console.log(event); 
  }

  const getMovie = (e) => {
    e.preventDefault();
    axios.get(`http://www.omdbapi.com/?s=${text}&apikey=735b7187`)
      .then((response) => {
        //console.log(response);
        setMovie(response.data.Search)
      })
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" onSubmit={getMovie}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search Movie" aria-label="Search" value={text} onChange={changeText} />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>


      <div className="container">
        <div className="row">
          {
            movie.map((value, index) => {
              return (
                <div className="col-3">
                  <div class="card my-3" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={value.Poster} alt="Card image cap" />
                    <div className="card-body">
                      <h3 className="card-title">{value.Year}</h3>
                      <h4 className="card-text">{value.Title}</h4>
                      <a href="#" className="btn btn-primary">More Details</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

    </>
  )
}

export default App