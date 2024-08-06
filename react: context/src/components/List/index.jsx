import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './List.css';

function List() {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(-1);

    useEffect(() => { 
        fetch("https://6658ec85de346625136ae3f0.mockapi.io/products")
        .then((res) => res.json())
        .then((url) => setData(url)); 
    }, []);

    const handleClick = (i) => {
        setIndex(i);
    };

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className='col'>
                    <ListGroup id="list" numbered>
                        {data.map((element, i) => (
                            <Link key={element.id} className={`list-group-item ${index === i? "active" : ""}`} 
                            to={`${element.id}`} onClick={() => handleClick(i)}>{element.name}</Link>
                        ))}
                    </ListGroup>
                </div>
                <div className='col-sm-8'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
}

export default List;