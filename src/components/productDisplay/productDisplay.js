import React, {useState, useEffect, useCallback} from "react";

import ProductDisplayCard from "./productDisplayCard";
import classes from "./productDisplay.module.css";

const ProductDisplay = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchProductHandler = useCallback(async() => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");

            const data = await response.json();
            
            const transformedProducts = data.map((oneProduct) => {
                const price =`$${oneProduct.price.toFixed(2)}`; 
                return {
                    id: oneProduct.id,
                    image: oneProduct.image,
                    title: oneProduct.title,
                    price: price,
                    numSold: oneProduct.rating.count, //this is suppose to be number of ratings
                    rating: oneProduct.rating.rate,
                    origin: "No Origin data",
                    category: oneProduct.category,
                    description: oneProduct.description
                }
            })
            setProducts(transformedProducts);
        }catch(error) {
            
        }
        setIsLoading(false);
    })

    useEffect(()=>{
        fetchProductHandler();
    }, [fetchProductHandler]);


    const productsDisplay = products.map(oneItem => 
        (<ProductDisplayCard 
            key={oneItem.id}
            image={oneItem.image}
            title={oneItem.title} 
            numSold={oneItem.numSold} 
            rating={oneItem.rating} 
            origin={oneItem.origin} 
            price={oneItem.price}
        />))

    return (
        <div className={classes.productDisplay}>
            {isLoading && <h1>Loading...</h1>}
            {!isLoading && productsDisplay}
        </div>
    )
};

export default ProductDisplay;