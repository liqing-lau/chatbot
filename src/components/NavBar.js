import React, {useState} from "react";
import "./NavBar.css";

function NavBar() {

    const [message, setMessage] = useState("Dummy div. Should show components!");

    function homeBtnHandler() {
        // ADD IN NEW COMPONENTS FOR FUTURE PAGES.
        setMessage("Home button is clicked");
    }

    function link1BtnHandler() {
        setMessage("Link1 is clicked");
    }

    function searchIconHandler() {
        setMessage("Search bar should be shown");
    }

    return (
        <div>
            <ul>
                <li><div onClick={homeBtnHandler}>Home</div></li>
                <li class="dropdown">
                    <div class="dropbtn">Dropdown</div>
                    <div class="dropdown-content">
                        <div onClick={link1BtnHandler}>Link 1</div>
                        <div>Link 2</div>
                        <div>Link 3</div>
                    </div>
                </li>
                <li>
                    <div onClick={searchIconHandler}> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </div>
                </li>
                <li>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart-fill" viewBox="0 0 16 16">
                            <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                        </svg>
                    </div>
                </li>
                <li>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>  
                    </div>
                </li>
            </ul>

            <h1>{message}</h1>
        </div>
    )
};

export default NavBar;