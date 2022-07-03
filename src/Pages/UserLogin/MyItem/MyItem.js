import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import MyItemDetails from '../MyItemDetails/MyItemDetails';

const MyItem = () => {
    // const [user] = useAuthStat(auth)
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([]); 
    useEffect(() => {
        const getItem = async () => {
            const email = user?.email;
            console.log(email);
            const url = `https://nameless-dawn-50265.herokuapp.com/stock/?email=${email}`
            try {

                const { data } = await axios.get(url);
                const myItem = data?.filter(stock => stock?.email === user?.email)
                console.log(myItem)
                console.log(data)
                setMyItems(myItem);

            }
            catch (error) {
                console.log(error.message);
            }
        }
        getItem()
    }, [user])
    return (
        <div className='w-50 mx-auto'>
        <h2>Your order list:{myItems.length} </h2>
        <p>{myItems.name}</p>
        {

            myItems.map(myItem=><MyItemDetails
                key={myItem._id}
                myItem = {myItem}
            
            ></MyItemDetails> )


           
            
            
          
        }
    </div>
    );
};

export default MyItem;