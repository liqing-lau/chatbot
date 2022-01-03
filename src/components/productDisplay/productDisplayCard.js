import "./ProductDisplayCard.css";

function ProductDisplayCard(props) {

    function showProductHandler() {
        console.log("Product details");
    }

    return (
        <div className="card" onClick={showProductHandler}>
            <img src={props.image} alt="unable to load" />
            <div className="text">
                <h3><b>{props.title}</b></h3> 
                <p><b>{props.price}</b></p>
                <p className="smallText">{props.numSold} | {props.rating} </p>
                <p className="smallText">{props.origin}</p> 
            </div>
        </div>
    )
}

export default ProductDisplayCard;