import React from 'react';
import { useSelector} from 'react-redux';
import { Form } from '../../components/form/form';
import { OrderItem } from '../../components/order-item';
import { calcTotalPrice } from '../../components/utils';
import './order-page.css';

export const OrderPage = () => {
    const items = useSelector((state) => state.cart.itemsInCart);

    if(items.length < 1) {
        return <h1>Ваша корзина пуста!</h1>
    }

    return (
        <div className="order-page">
            <div className="order-main">
                <div className="order-page__left">
                    { items.map(game => <OrderItem game={game}/>)}
                </div>
                <div className="order-page__right">
                    <div className="order-page__total-price">
                        <Form />
                    </div>
                </div>
            </div>
            <div>
                <div className="order-page__total-price">
                    <span>Total is : { items.length } items  {calcTotalPrice(items)} $.</span>
                </div>
            </div>
        </div>
    )
}
