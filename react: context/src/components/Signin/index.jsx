import { useState, useContext, useEffect } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { auth } from "../../auth.js";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { UserCtx } from "../../context/userContext.jsx";
import "./Signin.css";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserCtx);
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user.email);
            }
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate("home");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        });
    };

    return (
        <>
        {user ? <Navigate to="home" /> :
            <form className="form-signin w-100 m-auto" onSubmit={handleSubmit} action="">
                <h2 id="title">Sign in to your account</h2>
                <div className="mb-3">
                    <p id="link">
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
                    <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} minLength="6" required/>
                </div>
                <button type="submit" className="btn btn-primary w-100 py-2">Sign in</button>
                <p id="message">{error}</p>
            </form>
        }
        </>
    )
}

export default Signin;
