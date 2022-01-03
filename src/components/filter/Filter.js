import React, {useState, useEffect, useCallback} from "react";
import CheckboxCard from "./CheckboxCard";
import classes from "./Filter.module.css";

const Filter = () => {

    const [categories, setCategories] = useState([]);

    const fetchCategoriesHandler = useCallback(async() => {
        try {
            const response = await fetch("https://fakestoreapi.com/products/categories");
            const data = await response.json();
            setCategories(data);
        }catch(error) {
        }
    });
    useEffect(()=>{
        fetchCategoriesHandler();
    }, [fetchCategoriesHandler]);


    const shippingOrigin = ['Local', 'Overseas'];
    return (
        <div className={classes.filterOuterBorder}>
            <div>
                {categories.map(Onecategories =>
                    <CheckboxCard key={Onecategories} value={Onecategories} />)
                }
            </div>
            
            <div>
                <label htmlFor="priceBudget">Budget</label>
                <input type="range" id="priceBudget"></input>
            </div>
            
            <div>
                {shippingOrigin.map(shipOrigin =>
                    <CheckboxCard key={shipOrigin} value={shipOrigin} />)
                }
            </div>
        </div>
    )
};  

export default Filter;