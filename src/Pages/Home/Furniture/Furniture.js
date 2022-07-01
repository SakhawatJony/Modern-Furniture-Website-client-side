import React from "react";
import { useNavigate } from "react-router-dom";
import updateIcons from '../../../images/updated2.png'

const Furniture = ({ furniture }) => {
  const { _id, name, supplier, description, img, price,quantity} = furniture;

  const navigate = useNavigate();

  const navigateToServiceDetails = id => {
    navigate(`/service/${id}`);
  }
  return (
    <div class="col">
      <div style={{ height: "450px",border:'1px solid #6c757d' }} class="card rounded">
        <img
          src={img}
          style={{ height: "190px", width: "100%" }}
          class="card-img-top "
          alt="furniture img"
        />
        <div class="card-body">
          <h5><span className="">furniture Name: </span>{name}</h5>
          <p class="card-text m-0"><span className="fw-bold">Price: </span>{price}</p>
          <p class="card-text m-0" ><span className="fw-bold">Total Qty: </span>{quantity}</p>
          <p class="card-text m-0"><span className="fw-bold">Supplier Name: </span> {supplier}</p>
          <p class="card-text m-0">{description.slice(0,50)}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">
            <button type="button" onClick={() => navigateToServiceDetails(_id)} style={{background:'#A25B0F', color:'#ffff'}} class="btn fw-bold  btn-sm">
             <img src={updateIcons} style={{height:'20px',width:'20px'}} alt="" /> <span>update</span>
            </button>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
