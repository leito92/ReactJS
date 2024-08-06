function Button() {
    const handleClick = () => {
        alert("Thank you for your purchase.");
    };

    return(
        <button type="button" className="btn btn-primary" onClick={handleClick}>Buy</button>
    )
}

export default Button