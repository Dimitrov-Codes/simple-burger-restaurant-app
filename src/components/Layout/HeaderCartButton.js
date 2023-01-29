import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    const [cartButtonIsHighlighted, setCartButtonIsHighlighted] = useState(false);
    const numberOfCartItems = cartCtx.items.reduce((previousValue, currentValue) => previousValue += currentValue.amount, 0);
    let btnClass = `${classes.button} ${cartButtonIsHighlighted? classes.bump : ''}`
    useEffect(() =>{
        if(cartCtx.items.length === 0) return;
        setCartButtonIsHighlighted(true);
        const timer = setTimeout(() => setCartButtonIsHighlighted(false), 200)
        return () => clearTimeout(timer);
    }, [cartCtx.items])
    return (
        <button onClick={props.onClick} className={btnClass}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
};
export default HeaderCartButton;