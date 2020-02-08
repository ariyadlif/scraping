import React, {Component} from 'react';
import '../App.css';

class Header extends Component {
  	render(){
    	return(
	      <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
            <a class="navbar-brand" href="#"><img class="logonavbar" width="70px" src={require('../img/logofur.png')}/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fa fa-th"></i>  Categories
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Meja</a>
                        <a class="dropdown-item" href="#">Kursi</a>
                        <a class="dropdown-item" href="#">Perlengkapan Rumah</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"> </a>
                </li>
              </ul>

              <form class="form-inline my-2 my-lg-0">
                <input class="bulat lebar form-control mr-sm-2" type="text" placeholder="search..."></input>
              </form>

              <ul class="navbar-nav ml-auto">
                {/* <li class="nav-item"><a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Techfor Community</a></li> */}
                <li class="nav-item geser">
                  <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-shopping-cart"></i>
                  </a>
                </li>
              </ul>

              <div class="geser">
                <a href="#" class="bulat btn btn-outline-light" >Login</a>
              </div>
              <button class="bulat btn btn-outline-light my-2 my-sm-0" type="submit">Sign Up</button>
            </div>
        </nav>
    	);
  	}
}

export default Header;