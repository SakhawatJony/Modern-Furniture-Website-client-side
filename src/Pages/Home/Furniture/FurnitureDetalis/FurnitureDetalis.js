import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const FurnitureDetalis = () => {

    const { serviceId, } = useParams();
    const [service, setService] = useState({});


    useEffect(() => {
        const url = `https://nameless-dawn-50265.herokuapp.com/furniture/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [serviceId, service])


    const handlStockUpdate = (e) => {
        e.preventDefault();
        let deliver = e.target.quantity.value;
        const parseDeliver = parseInt(deliver);

        let quantityParse = service.quantity;
        let quantity = quantityParse + parseDeliver;


        const updateQuntity = { quantity }
        console.log(updateQuntity)



        const url = `https://nameless-dawn-50265.herokuapp.com/furniture/${serviceId}`;
        fetch(url, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updateQuntity),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

            });

    }





    const handleDeliver = () => {
        let deliver = 1;
        let quantityParse = service.quantity;
        let quantity = quantityParse - deliver;


        const updateQuntity = { quantity }
        console.log(updateQuntity)



        const url = `https://nameless-dawn-50265.herokuapp.com/furniture/${serviceId}`;
        fetch(url, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updateQuntity),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

            });
    };

    return (
        <div>
            <div className='mt-5'>
            <div class="col d-flex justify-content-center ">
                <div class="card h-100" style={{ width: '500px', border: '1px solid #A25B0F' }}>
                    <img src={service.img} class="card-img-top mx-auto pt-4" style={{ height: '200px', width: '200px' }} alt="" />
                    <div class="card-body">
                        <h6 class="card-title">Modal: {service.name}</h6>
                        <h6 class="card-title">Supplier: {service.supplier}</h6>
                        <h6 class="card-title">Price:${service.price}</h6>
                        <h6 class="card-title">Quty:{service.quantity}</h6>
                        <p class="card-text">{service.description}</p>

                        <button 
                         style={{background:'#A25B0F',color:'white'}}
                        onClick={handleDeliver} type="submit"  
                        class="btn fw-bold">Shipped</button>

                        <form className='mt-2' onSubmit={handlStockUpdate}>
                            <div class="mb-3 mt-2">
                                <label for="exampleInputPassword1" class="form-label"></label>
                                <input type="number" name='quantity'

                                    className='form-label'

                                />
                            </div>
                            <button 
                            style={{background:'#A25B0F',color:'white'}}
                            type="submit"
                             class="btn fw-bold"
                            >Restock</button>
                        </form>



                    </div>
                </div>

            </div>


            <Link to='/manageInventories'><button style={{ background: '#A25B0F', color: 'white' }} type="button" className="btn p-2  fw-bolder btn-md mt-5">Manage Inventories</button></Link>

        </div>
             
            
        </div>
    );
};

export default FurnitureDetalis;