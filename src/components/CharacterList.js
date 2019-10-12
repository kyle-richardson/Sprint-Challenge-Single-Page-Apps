import React, {useState, useEffect} from "react";
import {Link, Route} from "react-router-dom"
import SearchForm from "./SearchForm"
import Axios from "axios"
import CharacterCard from "./CharacterCard"
import {Name, Div} from "./Styles"

export default function CharacterList(props) {
  const {chars, setChars} = props
  const [search, setSearch] = useState('')
  const [nextPage, setNextPage] = useState("https://rickandmortyapi.com/api/character/")
  const [fullObj, setFullObj] = useState({})
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
      .get(nextPage)
      .then(res=> {
        console.log(res)
        const charArray = res.data.results
        setFullObj(res.data.info)
        setChars(charArray)
      })
      .catch(err=>console.log(err))
      // return setNextPage("https://rickandmortyapi.com/api/character/")
  }, [nextPage])
  
  return (
    <section className="character-list">
      <SearchForm 
        search={search} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
      />
      <h2>Character List</h2>
      <Div className={`${!fullObj.prev ? 'hide' : null}`}onClick={()=> {
        setNextPage(fullObj.prev)
      }}>Prev Page</Div>
      <Div className={`${!fullObj.next ? 'hide' : null}`}onClick={()=> {
        setNextPage(fullObj.next)
      }}>Next Page</Div>
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
