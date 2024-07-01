import './List.css';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

function List() {
    const [data, setData] = useState([]);
    useEffect(() => { 
        fetch("https://6658ec85de346625136ae3f0.mockapi.io/products")
        .then((res) => res.json())
        .then((url) => setData(url)); 
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className='col'>
                    <nav className="nav flex-column">
                        {data.map((data) => (
                            <Link id="item" key={data.id} to={`${data.id}`}>{data.id}- {data.name}</Link>
                        ))}
                    </nav>
                </div>
                <div className='col-sm-8'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
}

export default List;