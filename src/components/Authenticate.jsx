// import React from "react";
import { useState } from "react";

const API = 'https://fsa-jwt-practice.herokuapp.com/authenticate'

function Authenticate() {

    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null)

    async function handleClick() {
      try {
        const response = await fetch(API, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            }
          })
  
        const json = await response.json()
        setSuccessMessage(json.message)
        setToken(json.data)
      } catch (error) {
        setError(error.message)
      }
    }
    return (
        <>
        <h2>Authenticate</h2>
        {successMessage ? <p>{successMessage}</p> : null} 
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authorize!</button>
        </>
    )
}

export default Authenticate