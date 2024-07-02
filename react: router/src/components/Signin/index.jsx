import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //
    };

    return (
        <form className="form-signin w-100 m-auto" onSubmit={handleSubmit} action="">
            <h2>Sign in to your account</h2>
            <div className="mb-3">
                <p>
                    <Link to="signup">Or register for a new account</Link>
                </p>
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="mb-3">
                <div className="row g-2">
                    <div className="col-auto">
                        <label className="form-label">Password</label>
                    </div>
                    <div className="col-auto">
                        <Link href="#">Forgot your password?</Link>
                    </div>
                </div>
                <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <div className="form-check text-start my-3">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-labe">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2">Sign in</button>
        </form>
    )
}

export default Signin;
