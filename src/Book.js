import React from 'react'


  const Book=({name,author})=>{
    return (
      <div>
        <h3>Book</h3>
        <p>Name: {name}</p>
        <p>Author: {author}</p>
      </div>
    );
  }


export default Book;