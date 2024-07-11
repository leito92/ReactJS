import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import './Card.css'

function Card(){
    const {productId} = useParams();
    const [data, setData] = useState([]);
    useEffect(() => { 
        fetch(`${process.env.REACT_APP_API_URL}/${productId}`)
        .then((res) => res.json())
        .then((url) => setData(url.info));
    }, [productId]);

    return(
        <div className="card">
            <div className="card-body">
                {Object.keys(data).map((element) => 
                    <CardBody key={`${element}`} title={element} text={data[element]}/>
                )}
            </div>
        </div>
    )
}

function CardBody({title, text}) {
    return (
        <>
            <h5 className="card-title">{title}:</h5>
            <p className="card-text">{text}</p>
        </>
    );
}

export default Card
