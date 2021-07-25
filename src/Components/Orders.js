import React, { useEffect, useState } from 'react'
import '../style/Orders.css'
import { db } from './firebase'
import Order from './Order';
import { useStateValue } from './StateProvider';

function Orders() {
    const [{basket,user},dispatch] = useStateValue();
    const [orders,setOrders] = useState([]);

    useEffect( ()=>{
        console.log("Users >>>>>>>>>>>>",user)
        if(user){
        db.
        collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created','desc')
        .onSnapshot(snapshot=>(
            setOrders(snapshot.docs.map(doc => ({
                id:doc.id,
                data:doc.data()
            })))
        ))
    }
    else{
        setOrders([])
    }
    },[user])
    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders__order">
                {/* //TO DO - When do we give curly braces and when we give curved braces */}
                {orders?.map(order =>(
                    <Order order={order}/>
                ))}

            </div>
        </div>
    )
}

export default Orders
