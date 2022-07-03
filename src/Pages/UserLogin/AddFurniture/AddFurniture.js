import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';

const AddFurniture = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = 'https://nameless-dawn-50265.herokuapp.com/stock';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className='w-50 mx-auto'>
        <h3  style={{color:'#A25B0F'}} className='fw-bold pt-4'>Please Add A <span className='fw-bold' style={{color:'#6c757d'}}> Furniture Item!!!</span></h3>
        <form className='d-flex flex-column pt-3' onSubmit={handleSubmit(onSubmit)}>
            <input style={{border:'1px solid #6c757d'}} className='mb-2 rounded' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
            <input style={{border:'1px solid #6c757d'}} className='mb-2 rounded' placeholder='Email' {...register("email", { required: true, maxLength: 20 })} />
            <input style={{border:'1px solid #6c757d'}} className='mb-2 rounded' placeholder='Supplier Name' {...register("Supplier", { required: true, maxLength: 20 })} />
            <textarea style={{border:'1px solid #6c757d'}} className='mb-2 rounded' placeholder='Description' {...register("description")} />
            <input style={{border:'1px solid #6c757d'}} className='mb-2 rounded' placeholder='Price' type="number" {...register("price")} />
            <input style={{border:'1px solid #6c757d'}}  className='mb-2 rounded' placeholder='Quantity' type="number" {...register("quantity")} />
            <input style={{border:'1px solid #6c757d'}} className='mb-2 rounded'  placeholder='Photo URL' type="text" {...register("img")} />
            <input className='fw-bold text-white border-0 rounded' style={{background:'#6c757d'}} type="submit" value="Add Item" />
        </form>
    </div>
    );
};

export default AddFurniture;