
import React from "react";
import "./NavBar.scss"
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="wrapper">

      <div className="home">
      <Link to="/" >
        <button>Ana Sayfa</button>
        </Link>

      </div>

      <div className="style">
      <Link to="/women">
      <button>Kadın Stilleri</button>
      </Link>
      
      <Link to="/men">
      <button>Erkek Stilleri</button>
      </Link>

      <Link to="/Comment">
      <button>Yorumlar</button>
      </Link>
      
      </div>

    </div>
  );
};

export default NavBar;
