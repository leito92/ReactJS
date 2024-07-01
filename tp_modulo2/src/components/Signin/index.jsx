import { useNavigate , Link } from "react-router-dom";
import "./Signin.css";

function Signin() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        navigate('home')
    };

    return (
        <form className="form-signin w-100 m-auto">
            <h2 id="title">Sign in to your account</h2>
            <div className="mb-3">
                <p id="link">
                    <Link to="signup">Or register for a new account</Link>
                </p>
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" placeholder="Email address" />
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
                <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-check text-start my-3">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-labe">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2" onClick={handleSubmit}>
                Sign in
            </button>
        </form>
    )
}

export default Signin;
