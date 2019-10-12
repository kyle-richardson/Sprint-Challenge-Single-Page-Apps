import React, { useEffect} from "react";
import {Route, Link} from "react-router-dom"
import LocationCard from "./LocationCard"
import Axios from "axios"
import {Name} from "./Styles"

export default function LocationsList(props) {
    const {locs, setLocs} = props
    useEffect(()=> {
        Axios
          .get(`https://rickandmortyapi.com/api/location/`)
          .then(res=> {
            const locArray = res.data.results
            setLocs(locArray)
          })
          .catch(err=>console.log(err))
      }, [])
      return (
        <section className="location-list">
          <h2>Location List</h2>
          {locs.map(location=> {
            return (
              <Link key={location.id} to={`/locations/${location.id}`}>
                <Name>{location.name}</Name>
              </Link>
            )
          })}
          <Route path="/locations/:id" render={(props)=> {
            return <LocationCard props={props} locs={locs}/>
          }}/>
        </section>
      );
}
