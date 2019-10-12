import React from "react";
import Header from "./components/Header.js";
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
      <Route exact path="/characters" render={(props)=> {
        return <CharacterList props={props}/>
      }}/>
      
    </main>
  );
}
