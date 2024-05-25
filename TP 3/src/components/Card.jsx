function Card({body}) {
    return (
        <div className="card">
            <div className="card-body">
                {Object.keys(body).map((element) => 
                    <CardBody key={`${element}_${body[element]}`} title={element} text={body[element]}/>
                )}
            </div>
        </div>
    );
}

function CardBody({title,text}) {
    return (
        <>
            <h5 className="card-title">{title}:</h5>
            <p className="card-text">{text}</p>
        </>
    );
}

export default Card;