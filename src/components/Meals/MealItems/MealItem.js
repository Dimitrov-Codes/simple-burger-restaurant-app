import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";
import {useContext} from "react";
import CartContext from "../../../store/cart-context";

const MealItem = props => {
    const cartCtx = useContext(CartContext);
    const addToCarHandler = (amount) => {
        cartCtx.addItem({
            id: props.burger.id,
            name: props.burger.name,
            price: props.burger.price,
            amount: amount
        });
    };
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.burger.name}</h3>
                <p className={classes.description}>
                    {props.burger.description}
                </p>
                <p className={classes.price}>{`₹ ${props.burger.price.toFixed(2)}`}</p>
            </div>
            <div>
                <MealItemForm id={props.burger.id} onAddToCart={addToCarHandler}/>
            </div>
        </li>)
}
export default MealItem;