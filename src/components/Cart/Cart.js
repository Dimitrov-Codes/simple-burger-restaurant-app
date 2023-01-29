import classes from "./Cart.module.css"
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0;
    const totalAmount = cartCtx.totalAmount;
    const addCartItemHandler = (item) => {
        cartCtx.addItem({...item, amount: 1})
    };
    const removeCartItemHandler = (id) => {
        cartCtx.removeItem(id);
    };
    return (
        <Modal>
            {cartCtx.items.map(item => <CartItem key={item.id}
                                                 burger={item}
                                                 onAdd={addCartItemHandler.bind(null, item)}
                                                 onRemove={removeCartItemHandler.bind(null, item.id)}/>)}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>₹ {totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes.buttonAlt} onClick={props.onHideCart}>Cancel</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}
export default Cart;