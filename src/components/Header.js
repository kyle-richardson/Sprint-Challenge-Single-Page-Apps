import React from "react";
import {Button} from "./Styles"
import {Link} from "react-router-dom"

export default function Header() {

  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div className="navbar">
        <Link to="/">
          <Button>
            Home
          </Button>
        </Link>
        <Link to="/characters">
          <Button>
            Characters
          </Button>
        </Link>
        <Link to="/Locations">
          <Button>
            Locations
          </Button>
        </Link>
      </div>
    </header>
  );
}
