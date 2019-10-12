import React from "react";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
     <form onSubmit={props.handleSubmit}>
       <input 
          className="search-box"
          type="text"
          name="search"
          value={props.search}
          onChange={props.handleChange}
          placeholder="Character Name"
      />
      <button className="search-button">Search</button>
     </form>
    </section>
  );
}
