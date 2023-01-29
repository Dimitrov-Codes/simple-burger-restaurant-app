import {useRef} from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input"

const MealItemForm = props => {
    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.valueOf().value;
        const enteredAmountNumber = +enteredAmount;
        console.log(enteredAmountNumber)
        props.onAddToCart(enteredAmountNumber);
    }
    const amountInputRef = useRef();
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                label={"Quantity"}
                ref={amountInputRef}
                input={{
                    id: "quantity_" + props.id,
                    type: "number",
                    min: 1,
                    defaultValue: 1
                }}/>
            <button>+ Add</button>

        </form>
    )
}
export default MealItemForm;