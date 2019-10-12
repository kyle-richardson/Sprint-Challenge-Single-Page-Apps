import React, {useState, useEffect} from "react";
import {Card} from "./Styles"



export default function LocationCard(props) {
  const [location, setLocation] = useState(undefined);
  const id = props.props.match.params.id;

  useEffect(() => { 
    setLocation(props.locs.find(loc=> `${loc.id}`===id))

  },[props.locs, id]);

  
  return (
    location ? 
    <Card>
      <h2>{location.name}</h2>
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
      <p>Number of residents from the show: {location.residents.length}</p>
    </Card> 
    : null
  )
}
