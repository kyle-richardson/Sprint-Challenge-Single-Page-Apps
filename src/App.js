import React, {useState} from "react";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom'

import CharacterList from "./components/CharacterList"
import WelcomePage from "./components/WelcomePage"
import LocationsList from "./components/LocationsList"
import CharacterCard from "./components/CharacterCard"
import LocationCard from "./components/LocationCard"


export default function App() {
  const [chars, setChars] = useState([])
  const [locs, setLocs] = useState([])
  return (
    <main>
      <Header />
      <Route exact path="/" render={(props)=> {
        return <WelcomePage props={props}/>
      }}/>
      <Route exact path="/characters" render={(props)=> {
        return <CharacterList props={props} chars={chars} setChars={setChars}/>
      }}/>
      <Route exact path="/locations" render ={(props)=> {
        return <LocationsList props={props} locs={locs} setLocs={setLocs}/>
      }}/>
      <Route path="/characters/:id" render={(props)=> {
        return <CharacterCard props={props} chars={chars}/>
      }}/>
      <Route path="/locations/:id" render={(props)=> {
        return <LocationCard props={props} locs={locs}/>
      }}/>
    </main>
  );
}
