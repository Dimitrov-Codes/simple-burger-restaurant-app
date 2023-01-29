import CartContext from "./cart-context"
import {useReducer} from "react";
const defaultCartState = {
    items:[],
    totalAmount:0
};
const cartReducer = (state, action) => {
    if(action.type === 'ADD_ITEM'){
        const exitingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[exitingCartItemIndex];
        let updatedItem;
        let updatedItemsList;
        if(existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItemsList = [...state.items];
            updatedItemsList[exitingCartItemIndex] = updatedItem;
        }else{
           updatedItemsList = state.items.concat(action.item);
        }
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItemsList,
            totalAmount: updatedTotalAmount
        };
    }
    else if (action.type === "REMOVE_ITEM"){
        const itemToBeRemoved = state.items.findIndex(item => item.id === action.id);
        let updatedTotalAmount = state.totalAmount - state.items[itemToBeRemoved].price;
        let updatedItemsList;
        if(state.items[itemToBeRemoved].amount > 1) {
            let updatedItem = {...state.items[itemToBeRemoved], amount: state.items[itemToBeRemoved].amount - 1}
            updatedItemsList = [...state.items];
            updatedItemsList[itemToBeRemoved] = updatedItem;
        }
        else{
            updatedItemsList = [...state.items.filter((item, index) => index !== itemToBeRemoved)];
        }
        return {
            items: updatedItemsList,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState
};
const CartProvider = props =>{
    const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = item => {
        dispatchAction({type: 'ADD_ITEM', item});
    };
    const removeItemFromCartHandler = id => {
        dispatchAction({type: 'REMOVE_ITEM', id})
    };
    const cartContext= {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider