import React, {useState} from 'react';
import './home.css';



function Home() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleClick = () => {
        const opts ={
            method : "POST",
            body : JSON.stringify({
                username:username,
                password:password
            })
        }
        fetch("/login", opts).then(
            res => {
                if(res.status === 200) return res.json();
                else alert("there was an error")
            })
            .then()
            .catch(error => {
                console.log("there was an error", error)
            })
    }

    return (
        <div className="form">
            <div >
                <label>Login Here</label>
                <br></br>
                <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} /> 
                <br></br>
                <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
                <br></br>
                <button onClick={handleClick} s>Login</button>
            </div>
        </div>
    )
}

export default Home
