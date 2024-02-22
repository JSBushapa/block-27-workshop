import { useState } from "react"
import axios from "axios"

const BASE_URL = 'https://fsa-jwt-practice.herokuapp.com/signup'

function SignUpForm() {
    const [username, setUsername] = useState('')
    const [password, setPasswrod] = useState('')
    const [error, setError] = useState(null)

    async function handleSubmit(event) {
        event.preventDefault();
        try {
           const { data } = await axios.post (BASE_URL, {username, password})
            console.log('response: ', data)
        } catch (error) {
            setError(error.message);
        }
    }
    // handleSubmit()

    // if (error) {
    //     return <p>Loading</p>
    // }
    return  (
        <>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
        {/* {error ? <p>{error}</p> : null} */}

        <form onSubmit={handleSubmit}>
            <label>
                Username: <input name = 'name' type = 'text' value={username} onChange={(e) => setUsername(e.target.value)}/>
            </label>
            <label>
                Password: <input name = 'password' type = 'text' value={password} onChange={(e) => setPasswrod(e.target.value)}/>
            </label>
            <button>submit</button>
        </form>
        </>

    )
       
    
}

export default SignUpForm