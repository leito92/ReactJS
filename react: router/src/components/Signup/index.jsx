import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Signup.css';

function Signup() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const handleSubmit = (e) => {
        // authentication logic
    };

    return (
        <form className="form-signup w-100 m-auto">
            <h2>Create an account</h2>
            <div className="mb-3">
                <p>
                    <Link to="/">Or sign in to your account</Link>
                </p>
            </div>
            <div className="mb-3">
                <label className="form-label">Firstname</label>
                <input type="text" className="form-control" onChange={(e) => setFirstname(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Lastname</label>
                <input type="text" className="form-control" onChange={(e) => setLastname(e.target.value)} required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)} required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Confirm password</label>
                <input type="password" className="form-control" onChange={(e) => setConfirm(e.target.value)} required/>
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2" onSubmit={handleSubmit}>Sign up</button>
        </form>
    )
}

export default Signup;
