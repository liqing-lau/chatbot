import React from 'react';
import classes from './App.module.css';

import NavBar from './components/navBar/NavBar';
import ProductDisplay from "./components/ProductDisplay";

function App() {
  return (
    <React.Fragment>
      <NavBar /> 
      <div className={classes["float-container"]}>
          <div className={classes["float-child"]}>
            {/* filter */}
          </div>

          <ProductDisplay className={classes["float-child"]}/>
      </div>
    </React.Fragment>

  );
}

export default App;
