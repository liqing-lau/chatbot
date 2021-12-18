import "./ProductDisplay.css";
import logo from '../logo.svg'; //dummy

function ProductDisplay() {
    return (
        <div className="card">
            <img src={logo} alt="Unable to load image" />
            <div className="text">
                <h3><b>Product title</b></h3> 
                <p>Price</p>
                <p className="smallText">Number sold | Reviews </p>
                <p className="smallText">Place of origin</p> 
            </div>
        </div>
    )
}

export default ProductDisplay;