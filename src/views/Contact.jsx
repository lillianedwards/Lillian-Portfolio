import React from 'react';
import { useState } from 'react';

function Contact() {

  // handleFormSubmit () => {

  // }

  return (
    <div className="container text-center">
      <form className="form" onSubmit={()=> console.log("PLACEHOLDER")}>
        <input
          value={name}
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          type="text"
          placeholder="Email"
        />
          <input
          value={message}
          name="email"
          type="text"
          placeholder="Email"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact