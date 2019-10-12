import React, {useState,useEffect} from "react";
import Header from "./components/Header.js";
import Axios from "axios";
import {Route} from 'react-router-dom'

import CharacterList from "./components/CharacterList"
import WelcomePage from "./components/WelcomePage"


export default function App() {

  
  return (
    <main>
      <Header />
      <Route exact path="/" render={(props)=> {
        return <WelcomePage props={props}/>
      }}/>
      <Route path="/characters" render={(props)=> {
        return <CharacterList props={props}/>
      }}/>
    </main>
  );
}
