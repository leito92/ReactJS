import { Link } from "react-router-dom"
import './NotFound.css'

function NotFound() {
    return (
        <div id="error" className="container text-center">
            <h2>Oops, page not found!</h2>
            <p>The page you're looking for doesn't seem to exist. Let's get you back on track.</p>
            <Link className="btn btn-primary" to="/" role="button">Go to Homepage</Link>
        </div>
    )
}

export default NotFound