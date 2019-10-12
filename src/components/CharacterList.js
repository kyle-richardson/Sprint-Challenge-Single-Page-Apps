import React, { useEffect, useState } from "react";
import Axios from "axios"
import {Link} from "react-router-dom"

export default function CharacterList() {
  const [chars, setChars] = useState([])
  useEffect(()=> {
    Axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res=> {
        console.log(res)
        const charArray = res.data.results
        setChars(charArray)
      })
  }, [])
  return (
    <section className="character-list">
      <h2>Character List</h2>
      {chars.map(person=> {
        return (
          <Link key={person.id} to={`/characters/${person.id}`}>
            <div>{person.name}</div>
          </Link>
          
        )
      })}
    </section>
  );
}
