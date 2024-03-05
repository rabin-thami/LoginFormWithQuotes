import { useState } from "react";
import { PiFireFill, PiEye, PiEyeClosed } from "react-icons/pi";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    function toggleEye() {
        setShowPassword(!showPassword);
    }

    const formHandler = (event) => {
        event.preventDefault()
        console.log('You clicked submit.');
    }

    return (
        <div className="login-container">
            <PiFireFill className="icon"/>
            <h1>Login</h1>
            <p>Welcome To Day 9</p>
            <form onSubmit={formHandler}>
                <label htmlFor="email">Email *</label>
                <input 
                    type="text" 
                    name="email"
                    id="email"
                />
                <label htmlFor="password">Password *</label>
                <div className="password-container">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        name="password"
                        id="password"
                    />
                    {showPassword ? 
                        <PiEye className="password-icon" onClick={toggleEye}/> :
                        <PiEyeClosed className="password-icon" onClick={toggleEye}/>
                    }
                </div>
                <button>Login</button>
            </form>
        </div>
    );
}
