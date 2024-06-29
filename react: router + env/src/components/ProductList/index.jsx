import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import './ProductList.css'

function ProductList() {
    const [data, setData] = useState([]);
    useEffect(() => { 
        fetch(`${process.env.REACT_APP_API_URL}`)
        .then((res) => res.json())
        .then((url) => setData(url)); 
    }, []);

    return (
        <>
            <nav>
                {data.map((data) => (
                    <Link id="item" key={data.id} to={`${data.id}`}>{data.id}- {data.name}</Link>
                ))}
            </nav>
            <Outlet></Outlet>
        </>
    )
}

export default ProductList