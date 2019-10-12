import React, {useState, useEffect} from "react";
import {Card} from "./Styles"

export default function CharacterCard(props) {
  
  const [character, setCharacter] = useState(undefined);
  const id = props.props.match.params.id;

  useEffect(() => { 
    props.chars && setCharacter(props.chars.find(person=> `${person.id}`===id))

  },[props.chars, id]);

  
  return (
    character ? 
    <Card>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name}/>
      <p>Species: {character.species}</p>
      <p>Status: {character.status}</p>
    </Card> 
    : null
  )
}
