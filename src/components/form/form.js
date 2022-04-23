import React from 'react'
import { useState } from 'react'
import './form.css'
import firebase from '../../firebase'
import { Link } from "react-router-dom";

export const Form = () => {
    const ref = firebase.firestore().collection("orders")

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const makeOrder = () => {
        const order = {
            name,
            password,
            phone
        }
        const game = JSON.parse(localStorage.getItem('orders'));
        const completeOrder = [{
            person: order,
            game
        }]
        ref.doc().set(order);
        localStorage.setItem('orders', JSON.stringify([]));
        localStorage.setItem('completeOrders', JSON.stringify(completeOrder))
    }

    return (
    <div class="container">
        <div class="frame">
            <div ng-app ng-init="checked = false">
                <form class="form-signin" action="" method="post" name="form">
                    <label for="username">Name</label>
                    <input 
                        onChange={(e) => setName(e.target.value)}
                        class="form-styling" 
                        type="text" 
                        name="username" 
                        placeholder=""
                    />
                    <label for="password">Password</label>
                    <input 
                        onChange={(e) => setPassword(e.target.value)}
                        class="form-styling" 
                        type="text" 
                        name="password" 
                        placeholder=""
                    />
                    <label for="phone">Phone</label>
                    <input 
                        onChange={(e) => setPhone(e.target.value)}
                        class="form-styling" 
                        type="number" 
                        name="phone" 
                        placeholder=""
                    />
                    <Link to="/" className="header__store-title">
                        <div class="btn-animate" onClick={() => makeOrder()}>
                            <a class="btn-signin">Make Order</a>
                        </div>
                    </Link>
                </form>       
            </div>
        </div>
    </div>
  )
}
