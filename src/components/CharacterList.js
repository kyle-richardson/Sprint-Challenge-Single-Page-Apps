import React, {useState, useEffect} from "react";
import {Link, Route} from "react-router-dom"
import SearchForm from "./SearchForm"
import Axios from "axios"
import CharacterCard from "./CharacterCard"
import {Name} from "./Styles"

export default function CharacterList(props) {
  // const {chars, setChars} = props
  const [search, setSearch] = useState('')
  const [chars, setChars] = useState([])
  const handleChange = event=> {
    const {value} = event.target
    setSearch(value)
  }
  const handleSubmit = event=>{
    event.preventDefault()
    const filteredChars = chars.filter(ele => ele.name.toLowerCase().includes(search.toLowerCase()))
    setChars(filteredChars)
  }
  
  useEffect(()=> {
    Axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res=> {
        console.log(res.data.results)
        const charArray = res.data.results
        setChars(charArray)
      })
  }, [])
  return (
    <section className="character-list">
      <SearchForm 
        search={search} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
      />
      <h2>Character List</h2>
      {chars.map(person=> {
        return (
          <Link key={person.id} to={`/characters/${person.id}`}>
            <Name>{person.name}</Name>
          </Link>
        )
      })}
      <Route path="/characters/:id" render={(props)=> {
        return <CharacterCard props={props} chars={chars}/>
      }}/>
    </section>
  );
}
