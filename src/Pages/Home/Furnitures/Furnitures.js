import React, { useEffect, useState } from "react";
import Furniture from "../Furniture/Furniture";

const Furnitures = () => {
  const [furnitures, setFurnitures] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setFurnitures(data));
  }, []);

  return (
    <div className="mt-5">
      <h3 style={{ color: "#A25B0F" }} className="fw-bold">
      <i>  Furniture <span style={{color:'#6c757d'}} >Inventory</span></i> 
      </h3>
      <p style={{color:'#6c757d'}}>Best Selling My Furniture Inventory shop</p>
      <div className="container">

     
      <div class="row row-cols-1 row-cols-md-3 g-4 mt-4">
        {furnitures.map((furniture) => (
          <Furniture key={furniture.id} furniture={furniture}></Furniture>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Furnitures;
