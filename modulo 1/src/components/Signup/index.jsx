import { useState, useEffect } from 'react'
import './Signup.css'

function Signup() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const handleSubmit = () => {
        // signup authentication logic
    };

    return (
        <form>
            <h1>Please sign up</h1>
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
            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Sign up</button>
            </div>
        </form>
    )
}

export default Signup